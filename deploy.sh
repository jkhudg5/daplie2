#!/bin/bash

# Create a deployment directory
mkdir -p deployment

# Install production dependencies
npm install --production

# Build the application
npm run build

# Copy necessary files to deployment directory
cp -r .next deployment/
cp -r node_modules deployment/
cp package.json deployment/
cp package-lock.json deployment/
cp next.config.js deployment/
cp -r public deployment/ 2>/dev/null || true

# Create a deployment archive
cd deployment
tar -czf ../daplie-deployment.tar.gz .
cd ..

# Clean up
rm -rf deployment

echo "Deployment package created: daplie-deployment.tar.gz" 