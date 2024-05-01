import { z } from "zod";
import bcrypt from "bcrypt";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  role: string;
};



export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        role: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }: {ctx: any, input: CreateUserInput }) => {
      const existingUser = await ctx.db.user.findFirst({
        where: {
          email: input.email,
        },
      });

      if (existingUser) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message:  'El Usuario ya esta registrado'
        });
      }

      const role = await ctx.db.role.findUnique({
        where: { name: input.role },
      });

      if (!role) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: 'El rol no existe',
        });
      }
      
      const hashedPassword = await bcrypt.hash(input.password, 12);
      return ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          hashedPassword,
          roleId: role?.id,
        },
      });
    }),
});









