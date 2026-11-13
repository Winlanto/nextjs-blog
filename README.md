# Next.js Blog

A full-stack blog application built to demonstrate modern Next.js App Router patterns. The project combines React Server Components, protected Server Actions, Prisma-backed persistence, Kinde authentication, and a responsive Tailwind CSS interface.

## Tech Stack

- **Next.js 16** with the App Router and React Server Components
- **React 19** and **TypeScript**
- **Prisma ORM** with SQLite for local development
- **Kinde Auth** for authentication
- **Tailwind CSS** for styling
- **Server Actions** for form mutations and cache revalidation

## Key Features

- **Protected CRUD:** Authenticated users can create, read, update, and delete posts through Server Actions. Mutating actions verify the Kinde session before accessing the database.
- **Upvoting:** Posts support a lightweight upvote flow backed by an atomic Prisma increment.
- **Suspense streaming:** Post lists and edit views use React `<Suspense>` boundaries to stream asynchronous content with loading fallbacks.
- **Kinde Auth:** Login and redirect flows are integrated through the Kinde authentication route handler, with protected post management pages.
- **Dynamic post routes:** Each post has a detail page, edit page, loading state, not-found state, and error state.
- **Responsive UI:** A minimal interface built with Tailwind CSS and reusable components for navigation and post actions.

## Project Structure

```text
├── app/
│   ├── api/
│   │   ├── auth/[kindeAuth]/   # Kinde authentication route handler
│   │   └── posts/              # Posts API route
│   ├── posts/
│   │   ├── [id]/
│   │   │   ├── edit/           # Edit post page
│   │   │   ├── error.tsx       # Route-level error UI
│   │   │   ├── loading.tsx     # Route-level loading UI
│   │   │   ├── not-found.tsx   # Missing post UI
│   │   │   └── page.tsx        # Post detail page
│   │   └── page.tsx            # Protected post list and create form
│   ├── layout.tsx              # Root layout, metadata, header, and footer
│   └── page.tsx                # Home page
├── actions/
│   └── actions.ts              # Protected create, update, delete, and upvote actions
├── components/                 # Reusable UI and post action components
├── prisma/
│   └── schema.prisma           # Post model and database configuration
├── utils/
│   └── posts.ts                # Post data access helpers
└── package.json
```

## Local Setup

### Prerequisites

- Node.js 20 or newer
- A Kinde application configured for local development

### 1. Clone and install

```bash
git clone https://github.com/Winlanto/nextjs-blog.git
cd nextjs-blog
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
DATABASE_URL="file:./dev.db"

KINDE_CLIENT_ID="your_kinde_client_id"
KINDE_CLIENT_SECRET="your_kinde_client_secret"
KINDE_ISSUER_URL="https://your_domain.kinde.com"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000/posts"
```

Use the corresponding values from your Kinde application. Keep `.env.local` private and never commit credentials to source control.

### 3. Initialize Prisma

```bash
npx prisma generate
npx prisma db push
```

The local SQLite database is created from the `Post` model in `prisma/schema.prisma`.

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
