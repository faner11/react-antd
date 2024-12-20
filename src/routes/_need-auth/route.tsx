import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_need-auth')({
  beforeLoad() {
    const login = localStorage.getItem('login')
    if (login == null) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})
