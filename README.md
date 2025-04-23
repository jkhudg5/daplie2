# Daplie Website

This is the official website for Daplie, built with Next.js and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Cloud66

### Option 1: GitHub Deployment
1. Push your code to a GitHub repository
2. Create a new application in Cloud66
3. Connect your GitHub repository
4. Configure the following settings:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Node.js version: 18.x or higher
5. Deploy your application

### Option 2: Direct Deployment (No GitHub)
1. Install the Cloud66 CLI:
   ```bash
   gem install cloud66
   ```

2. Login to Cloud66:
   ```bash
   cloud66 login
   ```

3. Prepare the deployment package:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

4. Deploy using the CLI:
   ```bash
   cloud66 deploy --stack YOUR_STACK_NAME --file daplie-deployment.tar.gz
   ```

### Option 3: Manual Upload
1. Prepare the deployment package:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

2. Log in to your Cloud66 dashboard
3. Create a new application
4. Choose "Upload Code" instead of connecting to GitHub
5. Upload the `daplie-deployment.tar.gz` file
6. Configure the following settings:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Node.js version: 18.x or higher

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- Font Awesome 