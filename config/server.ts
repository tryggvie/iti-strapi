export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Enable development features when NODE_ENV is development
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
