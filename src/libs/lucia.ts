import { lucia } from "lucia";
import { d1 } from "@lucia-auth/adapter-sqlite";
import { github } from "@lucia-auth/oauth/providers";
import { astro } from "lucia/middleware";

export const auth = (db: D1Database) =>
  lucia({
    adapter: d1(db, {
      user: "user",
      session: "user_session",
      key: "user_key",
    }),
    middleware: astro(),
    env: import.meta.env.DEV ? "DEV" : "PROD",
    getUserAttributes: (data) => {
      return {
        githubUsername: data.username,
        githubImageUri: data.image_uri,
      };
    },
  });

export const githubAuth = (env: {
  DB: D1Database;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
}) =>
  github(auth(env.DB), {
    clientId: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
  });

export type Auth = typeof auth;
