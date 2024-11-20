import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
export const Route = createFileRoute('/login')({
  validateSearch: (search) => {
    return z
      .object({
        redirect: z.string().optional(),
      })
      .parse(search)
  },
})
