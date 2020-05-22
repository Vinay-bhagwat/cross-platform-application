import { WebPlugin } from '@capacitor/core';
import { ReactCapacitorPluginPlugin } from './definitions';

export class ReactCapacitorPluginWeb extends WebPlugin implements ReactCapacitorPluginPlugin {
  constructor() {
    super({
      name: 'ReactCapacitorPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const ReactCapacitorPlugin = new ReactCapacitorPluginWeb();

export { ReactCapacitorPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ReactCapacitorPlugin);
