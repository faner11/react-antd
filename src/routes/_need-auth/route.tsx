import { createFileRoute, redirect } from '@tanstack/react-router'
import { isNil } from 'es-toolkit'

export const Route = createFileRoute('/_need-auth')({
  beforeLoad() {
    const login = localStorage.getItem('login')
    if (isNil(login)) {
      return redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})
