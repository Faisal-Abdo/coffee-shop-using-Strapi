# Café Website — Next.js + Strapi

A dynamic café website built with [Next.js](https://nextjs.org/) for the frontend and [Strapi](https://strapi.io/) as the headless CMS for the backend. Strapi lets café owners manage menu items, blog posts, and other content without touching code, while the Next.js frontend consumes that content through Strapi's REST API.

## Getting Started

This frontend expects a running Strapi instance to fetch content from.

1. Set the Strapi API URL in `app/config.js` (defaults to `http://127.0.0.1:1337`).
2. Create a `.env` file in the project root with your Strapi API token:

   ```
   API_TOKEN=<your-strapi-api-token>
   ```

3. Install dependencies and run the dev server:

   ```bash
   npm install
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/Menu`, `app/Blog`, `app/Contact`, `app/about` — page routes, each fetching content from Strapi
- `app/components` — shared UI components (Navbar, Footer, cart, contact form, view/click tracking)
- `app/config.js` — Strapi API base URL
- `public/images`, `public/js`, `app/css` — static assets and legacy styling/scripts

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io/)

## Deploy

The Next.js frontend can be deployed on [Vercel](https://vercel.com/) or any Node host; the Strapi backend needs to be deployed separately (e.g. Strapi Cloud, a VPS, or a container host) with `API_TOKEN` pointed at it.
