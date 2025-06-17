import React from 'react';
import { Container } from 'inversify';

import { container } from './classes/classes.di.ts';

export interface IClassModule {
  destructor?(): void;
  loader?(): unknown;
  render(): React.JSX.Element;
}

export class LazyScreen implements IClassModule {
  private instance?: IClassModule;

  constructor(private readonly ClassModule: new (container: Container) => IClassModule) {}

  create() {
    this.destructor();
    this.instance = new this.ClassModule(container);
  }

  destructor() {
    if (this.instance) {
      if (this.instance.destructor) {
        this.instance.destructor();
        delete this.instance;
      }
    }
  }

  loader() {
    if (this.instance?.loader) {
      return this.instance.loader();
    }
  }

  render() {
    return <>{this.instance?.render()}</>;
  }
}
