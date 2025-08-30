'use client'

import Header from '@/components/layout/Header'
import Register from '@/components/auth/Register'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Register />
    </div>
  )
}