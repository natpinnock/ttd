import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const lessonsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lesson.findMany();
  }),
});