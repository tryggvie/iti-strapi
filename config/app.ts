export default ({ env }) => ({
  keys: env.array('APP_KEYS'),
  name: 'iti-strapi',
  env: env('NODE_ENV', 'development'),
});