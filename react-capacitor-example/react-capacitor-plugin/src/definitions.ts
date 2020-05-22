declare module "@capacitor/core" {
  interface PluginRegistry {
    ReactCapacitorPlugin: ReactCapacitorPluginPlugin;
  }
}

export interface ReactCapacitorPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
