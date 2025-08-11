# Required Environment Variables for Railway Deployment

Copy these environment variables to your Railway service configuration:

## Database Configuration
```
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://username:password@host:port/database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
DATABASE_SSL=false
DATABASE_SSL_REJECT_UNAUTHORIZED=false
DATABASE_SCHEMA=public
DATABASE_CONNECTION_TIMEOUT=60000
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
```

## App Configuration
```
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
PUBLIC_URL=https://your-app-name.railway.app
```

## Strapi Security Keys (Generate these for production)
```
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
ENCRYPTION_KEY=your-encryption-key
JWT_SECRET=your-jwt-secret
```

## Optional: Webhooks
```
WEBHOOKS_POPULATE_RELATIONS=false
```

## How to Generate Security Keys

Run these commands locally to generate secure keys:

```bash
# Generate APP_KEYS (4 random strings)
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Generate other secrets
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Important Notes

1. **DATABASE_URL**: This should be automatically provided by Railway when you connect your PostgreSQL service
2. **Security Keys**: Never reuse keys from development - generate new ones for production
3. **PUBLIC_URL**: Must match your actual Railway app URL
4. **SSL**: Set to `false` for Railway's internal connections
