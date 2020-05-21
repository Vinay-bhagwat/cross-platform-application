declare module "@capacitor/core" {
  interface PluginRegistry {
    ReactCapacitorPWAPlugin: ReactCapacitorPWAPluginPlugin;
  }
}

export interface ReactCapacitorPWAPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
