import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  if (client === 'postgres') {
    // If DATABASE_SSL=true, allow self-signed certs; if false, disable TLS.
    const ssl = env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false;

    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl,
        },
        pool: { min: 0, max: 10 },
      },
    };
  }

  // Local default (SQLite)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};
