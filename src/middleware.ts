import { auth } from "@/libs/lucia";

import type { MiddlewareResponseHandler } from "astro";

export const onRequest: MiddlewareResponseHandler = async (context, next) => {
  context.locals.auth = auth(context.locals.runtime.env.DB).handleRequest(
    context
  );
  return await next();
};
