/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
type ENV = {
  DB: D1Database;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {
    auth: import("lucia").AuthRequest;
  }
}

/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./libs/lucia").Auth;
  type DatabaseUserAttributes = {
    username: string;
    image_uri: string;
  };
  type DatabaseSessionAttributes = {};
}
