export default ({ env }) => {
  console.log('Boot:', {
    NODE_ENV: env('NODE_ENV'),
    HOST: env('HOST'),
    PORT: env('PORT'),
    PUBLIC_URL: env('PUBLIC_URL'),
    DB_CLIENT: env('DATABASE_CLIENT'),
    HAS_DB_URL: !!env('DATABASE_URL'),
  });
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('PUBLIC_URL', 'http://localhost:1337'),
    proxy: true,
    app: { keys: env.array('APP_KEYS') },
  };
}