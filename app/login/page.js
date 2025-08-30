'use client'

import Header from '@/components/layout/Header'
import Login from '@/components/auth/Login'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Login />
    </div>
  )
}