import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'routed-app',
  outputTargets:[
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
