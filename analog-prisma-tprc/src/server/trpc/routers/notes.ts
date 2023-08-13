import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
// Import our prisma instance and the Prisma client
import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';

/**
 * Default selector for Note.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultNoteSelect = Prisma.validator<Prisma.NoteSelect>()({
  id: true,
  note: true,
  createdAt: true,
});

export const noteRouter = router({
  create: publicProcedure
    .input(
      z.object({
        note: z.string(),
      })
    )
    .mutation(({ input }) =>
      prisma.note.create({
        data: {
          note: input.note,
        },
        select: defaultNoteSelect,
      })
    ),
  list: publicProcedure.query(() => {
    return prisma.note.findMany({
      select: defaultNoteSelect,
    });
  }),
  remove: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ input }) => {
      return prisma.note.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
