declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NG_APP_ENV: string;
    readonly NG_APP_AUTH0_DOMAIN: string;
    readonly NG_APP_AUTH0_CLIENT_ID: string;
  }
}
