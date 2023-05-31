import { createTRPCRouter } from "~/server/api/trpc";
import { groupRouter } from "./routers/groups";
import { lessonsRouter } from "./routers/lessons";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  groups: groupRouter,
  lessons: lessonsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;