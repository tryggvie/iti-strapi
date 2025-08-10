export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Use the Railway URL for production, fallback to localhost only for local development
  url: env('PUBLIC_URL') || (env('NODE_ENV') === 'production' ? undefined : 'http://localhost:1337'),
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
