# Advanced Full-Stack AI Platform with Next.js -> Artifusion

## Introduction and Overview

This project is an innovative AI platform featuring three core AI tools: conversation, image, and music generation. Integrated with Stripe, the platform offers a dynamic subscription model with both free and paid tiers.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, Custom Components via ShadCN, Lucide React
- **Backend:** Node.js, Express
- **Database:** PlanetScale with MySQL and PrismaDB
- **Authentication:** Clerk and Auth0
- **APIs:** OpenAI, Replicate, Stripe
- **Other Libraries and Tools:** Axios, Zod, ZodResolver, React Hook Form
- **Middleware:** Custom server-side middleware for advanced routing
- **Environment:** Managed through `.env` files

## Features and Functionalities

### General Features

- **Pro-User Modal:** Unlock features exclusive to pro subscribers.
- **Free-Tier:** Free users have limited access to AI generations.

### Specialized AI Tools

- **Conversation Model:** Advanced chat functionalities powered by OpenAI.
- **Image Generation:** Create compelling images from text prompts.
- **Music Generation:** Convert text or musical notation into audio files.

### Additional Features

- **Subscription Model:** Utilizes Stripe for a dynamic subscription mechanism.
- **Authentication:** Multi-layered security via Clerk and Auth0.

## Advanced Technical Features

### Webhooks

- **Stripe Webhooks:** Real-time event handling for subscription changes.
- **Chat Completions:** Utilizing OpenAI's asynchronous APIs for real-time chat completion.

### Multiple APIs and Libraries

- **OpenAI for Text and Conversation:** Using GPT-3 for chat completions.
- **Replicate for Music:** Transform text into tunes.
- **Axios:** Efficient HTTP requests.
- **Zod and ZodResolver:** Robust form validation.

### Routing and URL Structure

- **Dynamic Routing:** Leverage Next.js' dynamic routes for clean URL structure.
- **Middleware:** Custom middleware for route-specific logic.

## Code Structure and Quality

- **Form Handling:** React Hook Form integrated with Zod for top-tier validation.
- **Environment Management:** `.env` files for secure and efficient environment variable handling.

## Future Developments

- **Crisp Integration:** Planned integration with Crisp for real-time customer support and error logging.
- **Landing Page Updates:** Upcoming enhancements to the landing page for better user experience.

## Deployment

TBD on Deployment of artifusion app using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

