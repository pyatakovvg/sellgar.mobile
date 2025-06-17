import { inject, injectable } from 'inversify';
import axios, { AxiosError, AxiosInstance } from 'axios';
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { ForbiddenException } from './exeptions/forbidden.exception.ts';
import { UnauthorizedException } from './exeptions/unauthorized.exception.ts';
import { ServiceUnavailableException } from './exeptions/service-unavailable.exception.ts';
import { InternalServerErrorException } from './exeptions/internal-server-error.exception.ts';

import { HttpClientInterface } from './http-client.interface.ts';
import { AuthTokenStoreServiceInterface } from '../auth-store';

@injectable()
export class HttpClient implements HttpClientInterface {
  private readonly _axios: AxiosInstance;
  private readonly _controller = new AbortController();
  private isRefreshing: boolean = false;
  private failedRequestsQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: unknown) => void;
  }> = [];

  constructor(
    @inject(AuthTokenStoreServiceInterface) private readonly authTokenStoreService: AuthTokenStoreServiceInterface,
  ) {
    this._axios = this.getInstance();

    this._axios.interceptors.request.use(this._requestFulfilled, this._rejected);
    this._axios.interceptors.response.use(this._responseFulfilled, this._rejected);
  }

  private getInstance(): AxiosInstance {
    if (!this._axios) {
      return axios.create({
        withCredentials: true,
        signal: this._controller.signal,
      });
    }
    return this._axios;
  }

  private clearAuthData(): void {
    this.authTokenStoreService.clearAuthData();
    delete this._axios.defaults.headers.Authorization;
  }

  private _requestFulfilled(config: InternalAxiosRequestConfig) {
    const accessToken = this.authTokenStoreService.getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  }

  private _responseFulfilled(response: AxiosResponse) {
    return response.data;
  }

  private async _rejected(error: any) {
    if (error.response?.status === 401) {
      const refreshToken = this.authTokenStoreService.getRefreshToken();
      const originalRequest = error.config;

      if (!refreshToken) {
        this.clearAuthData();
        return Promise.reject(error);
      }

      if (this.isRefreshing) {
        return new Promise((resolve, reject) => {
          this.failedRequestsQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return this._axios(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      this.isRefreshing = true;

      try {
        const { data } = await axios.post('https://your-api.com/auth/refresh', { refreshToken });

        this.authTokenStoreService.setAccessToken(data.accessToken);
        this.authTokenStoreService.setRefreshToken(data.refreshToken);

        this._axios.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        this.failedRequestsQueue.forEach(({ resolve }) => resolve(data.accessToken));
        this.failedRequestsQueue = [];

        return this._axios(originalRequest);
      } catch (refreshError) {
        this.failedRequestsQueue.forEach(({ reject }) => reject(refreshError));
        this.failedRequestsQueue = [];

        this.clearAuthData();

        return Promise.reject(refreshError);
      } finally {
        this.isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }

  abort(): void {
    this._controller.abort();
  }

  get<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this._axios.get<T, R, D>(url, config);
  }

  post<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this._axios.post<T, R, D>(url, data, config);
  }

  put<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this._axios.put<T, R, D>(url, data, config);
  }

  patch<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
    return this._axios.patch<T, R, D>(url, data, config);
  }

  delete<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    return this._axios.delete<T, R, D>(url, config);
  }

  send<T = any, R = T, D = any>(config: Omit<AxiosRequestConfig<D>, 'baseURL'>) {
    return this._axios.request<T, R, D>(config);
  }
}
