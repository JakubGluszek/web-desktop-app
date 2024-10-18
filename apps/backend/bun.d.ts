declare module 'bun' {
  interface ProcessEnv {
    // Server config
    readonly PORT: string;
  }
}
