export default ({ env }) => ({
  keys: env.array('APP_KEYS'),
});