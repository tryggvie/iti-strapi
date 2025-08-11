// src/index.ts
export default {
  register({ strapi }) {
    // Always-200 healthcheck
    strapi.server.use(async (ctx, next) => {
      if (ctx.path === '/_health') {
        ctx.status = 200;
        ctx.body = 'ok';
        return;
      }
      await next();
    });
  },
  bootstrap() {},
};
