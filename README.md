This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel


1. shadcnUI used insted of other css frameworks is because it is not a component library. It allows us to export the components
   for the project we are working on ArtiFusion, locally and after pushed to a remote branch in github. We also have full flexibility
   to modify said components to our bussiness model if any changes are needed. It also helps to keep the code loosely typed allowing
   flexibiliy. Using Chakra for a @prev project I noticed I did not have access to component source code(How components work)
   (we can only import and tailor them to specifications)
   (Once installed with CLI user can directly import components and they will appear in project folder as .js or .tsx file)
   (The individual components contains tightly typed code === perfect for maintainance)
   (Gives ownership to component system)
   (Implemented Route groups to prevent folders in app from being included in the route's URL path)
   (Organize route segments without affecting URL path structure)
   (adds utility to structure file hierarchy)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
