# Next.js Blog

A full-stack blog application built with the Next.js App Router. It demonstrates protected Server Actions, Prisma-backed PostgreSQL persistence, Kinde authentication, cache-aware mutations, and streamed UI states.

## Live Demo

[View the live application](https://nextjs-blog-one-khaki-87.vercel.app)

## Tech Stack

- **Next.js 16** — App Router and Server Actions
- **TypeScript**
- **PostgreSQL** — Neon Serverless
- **Prisma ORM**
- **Kinde Authentication**
- **Tailwind CSS**

## Key Features

- Full CRUD for blog posts through protected Server Actions
- Interactive post upvoting with cache invalidation
- React Suspense streaming with loading fallbacks
- Kinde session protection for authenticated post management
- Dynamic post detail, edit, loading, error, and not-found routes
- Responsive interface built with reusable Tailwind CSS components

## Project Structure

```text
├── app/
│   ├── api/auth/[kindeAuth]/   # Kinde authentication route handler
│   ├── posts/                  # Protected post list and dynamic post routes
│   ├── layout.tsx              # Root layout and shared metadata
│   └── page.tsx                # Home page
├── actions/
│   └── actions.ts              # Protected CRUD and upvote Server Actions
├── components/                 # Reusable UI and post action components
├── prisma/
│   └── schema.prisma           # PostgreSQL schema and Post model
├── utils/
│   └── posts.ts                # Post data access helpers
└── package.json
```

## Local Setup

### Prerequisites

- Node.js 20 or newer
- A PostgreSQL database, such as a Neon project
- A Kinde application configured for local development

### 1. Clone and install dependencies

```bash
git clone https://github.com/Winlanto/nextjs-blog.git
cd nextjs-blog
npm install
```

### 2. Configure environment variables

Create `.env` in the project root and add your Neon connection string:

```env
DATABASE_URL="postgresql://neon_user:your_db_secret@ep-example.neon.tech/dbname?sslmode=require"
```

Create `.env.local` and add the keys and URLs from your Kinde application:

```env
KINDE_CLIENT_ID="your_kinde_client_id"
KINDE_CLIENT_SECRET="your_kinde_client_secret"
KINDE_ISSUER_URL="https://your_domain.kinde.com"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/posts"
```

Keep both environment files private and never commit credentials to source control.

### 3. Push the Prisma schema

```bash
npx prisma db push
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The `/posts` area requires an authenticated Kinde session.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```
