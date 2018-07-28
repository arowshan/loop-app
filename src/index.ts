import {LoopAppApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {LoopAppApplication};

export async function main(options?: ApplicationConfig) {
  const app = new LoopAppApplication(options);
  await app.boot();
  await app.start();
  return app;
}
