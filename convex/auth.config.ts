import { env } from 'node:process';

export default {
    providers: [
      {
        domain: env.NEXT_PUBLIC_CLERK_FRONTEND_API_URL,
        applicationID: "convex",
      },
    ]
  };