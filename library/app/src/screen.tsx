import React from 'react';
import { Container } from 'inversify';

interface IOptions {
  module(): Promise<any>;
  layout(props: React.PropsWithChildren): React.ReactNode;
}

export class Screen {
  private ClassModule: any;

  constructor(
    public readonly name: string,
    private readonly options: IOptions,
  ) {}

  async loadModule() {
    const { ClassModule } = await this.options.module();

    console.log('loadModule', ClassModule);

    this.ClassModule = ClassModule;
  }

  create(container: Container) {
    return new this.ClassModule(container);
  }
}
