import { WebPlugin } from '@capacitor/core';
import { ReactCapacitorPWAPluginPlugin } from './definitions';

export class ReactCapacitorPWAPluginWeb extends WebPlugin implements ReactCapacitorPWAPluginPlugin {
  constructor() {
    super({
      name: 'ReactCapacitorPWAPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const ReactCapacitorPWAPlugin = new ReactCapacitorPWAPluginWeb();

export { ReactCapacitorPWAPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ReactCapacitorPWAPlugin);
