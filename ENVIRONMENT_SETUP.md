# 🚀 Environment Configuration Guide

## 📁 Current Setup: Single Local + Multiple Cloud Environments

```
Local Development:
├── iti-strapi/          ← Single local copy (this directory)
    ├── .env             ← Local development config
    └── config/          ← Shared configuration

Cloud Environments:
├── Railway Dev          ← iti-strapi-dev.up.railway.app
└── Railway Prod         ← iti-strapi.up.railway.app
```

## 🔧 Local Development (.env)

```bash
# Environment
NODE_ENV=development
PUBLIC_URL=http://localhost:1337

# Server
HOST=0.0.0.0
PORT=1337

# Database (Local SQLite)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Your existing secrets...
APP_KEYS=metAXmfgG4uC3b+acCZygQ==,H2LGB4REFLf1F/TszBMGCA==,9L5w8dMU//+aAfzQ5ooQLw==,kV2p27gtsB9kpX9GL7aUrA==
API_TOKEN_SALT=6TrPnvyj2s+82+3t7Bq8vw==
ADMIN_JWT_SECRET=HQE/cRLy2zXsrDL6jOIBcA==
TRANSFER_TOKEN_SALT=8brFxqR5fT1c+F11Ex81LQ==
ENCRYPTION_KEY=COLubUV+7vQWr0HneE6uTw==
JWT_SECRET=MeVsnmakbWpkK6f7nLI3kg==
```

## ☁️ Railway Development Environment

**Set these in Railway dashboard Variables tab:**

```bash
NODE_ENV=production
PUBLIC_URL=https://iti-strapi-dev.up.railway.app
HOST=0.0.0.0
PORT=1337

# Database (PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_URL=your_railway_postgres_url

# Your existing secrets...
APP_KEYS=metAXmfgG4uC3b+acCZygQ==,H2LGB4REFLf1F/TszBMGCA==,9L5w8dMU//+aAfzQ5ooQLw==,kV2p27gtsB9kpX9GL7aUrA==
API_TOKEN_SALT=6TrPnvyj2s+82+3t7Bq8vw==
ADMIN_JWT_SECRET=HQE/cRLy2zXsrDL6jOIBcA==
TRANSFER_TOKEN_SALT=8brFxqR5fT1c+F11Ex81LQ==
ENCRYPTION_KEY=COLubUV+7vQWr0HneE6uTw==
JWT_SECRET=MeVsnmakbWpkK6f7nLI3kg==
```

## 🚀 Railway Production Environment

**Set these in Railway dashboard Variables tab:**

```bash
NODE_ENV=production
PUBLIC_URL=https://iti-strapi.up.railway.app
HOST=0.0.0.0
PORT=1337

# Database (PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_URL=your_railway_postgres_url

# Generate NEW secrets for production!
# Use: openssl rand -base64 32
```

## ✅ Benefits of This Setup

1. **Single Source of Truth**: One local codebase
2. **Environment Variables**: Control behavior per environment
3. **Easy Maintenance**: Update once, deploy everywhere
4. **Cost Effective**: No duplicate local resources
5. **Standard Practice**: Follows DevOps best practices

## 🔄 Workflow

1. **Develop locally** with `npm run dev`
2. **Test changes** in local environment
3. **Commit and push** to Git
4. **Railway auto-deploys** to dev environment
5. **Test in dev** environment
6. **Deploy to production** when ready

## 🚨 Important Notes

- **Never commit `.env` files** to Git
- **Use different secrets** for production
- **Railway auto-deploys** on Git push
- **Local always runs in development mode**
- **Cloud environments always run in production mode**
