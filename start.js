#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Strapi application...');
console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('Port:', process.env.PORT || 1337);
console.log('Database Client:', process.env.DATABASE_CLIENT || 'sqlite');

// Check if we're in production and have required env vars
if (process.env.NODE_ENV === 'production') {
  const requiredVars = ['DATABASE_CLIENT', 'DATABASE_URL', 'APP_KEYS'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingVars.join(', '));
    console.error('Please check your Railway environment configuration.');
    process.exit(1);
  }
  
  console.log('✅ All required environment variables are set');
}

// Start Strapi
const strapiProcess = spawn('npx', ['strapi', 'start'], {
  stdio: 'inherit',
  env: process.env
});

strapiProcess.on('error', (error) => {
  console.error('❌ Failed to start Strapi:', error);
  process.exit(1);
});

strapiProcess.on('exit', (code) => {
  console.log(`Strapi process exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  strapiProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  strapiProcess.kill('SIGINT');
});
