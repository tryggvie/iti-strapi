import path from 'path';
export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');
  if (client === 'postgres') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false,
        },
      },
    };
  }
  return {
    connection: {
      client: 'sqlite',
      connection: { filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')) },
      useNullAsDefault: true,
    },
  };
};
