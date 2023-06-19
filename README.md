# client-management-app

A web App built using React.js, Next.js, Typescript, Tailwind CSS, Zustand, Supabase and PostgreSQL

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)
- Yarn - [Download & Install Yarn](https://yarnpkg.com/getting-started/install)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/HABEEB99/client-management-app
```

2. Change to the project directory:

```bash
git clone https://github.com/HABEEB99/client-management-app
```

3. Install the dependencies:

```bash
yarn install
```

## Usage

To start the development server, run the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To deploy the application to a production environment, follow these steps:

1. Update the necessary environment variables in .env.production file.

2. Build the application:

```bash
yarn build
```

3. Start the production server:

```bash
yarn start
```

## Environment Variables

The following environment variables are required for the application to run correctly. Make sure to set these variables before deploying or running the application.

- NEXT_PUBLIC_SUPABASE_URL=
- NEXT_PUBLIC_SUPABASE_ANON_KEY=
- SUPABASE_SERVICE_ROLE_KEY=

## Built With

- Next.js - The React framework for server-side rendering and static websites.
- Supabase - An open-source Firebase alternative for backend services.
- React - A JavaScript library for building user interfaces.
- Tailwind CSS - A CSS library for building mobile first user interfaces.
- Zustand - A library for managing state in React.
- NPM - Fast, reliable, and secure dependency management.
