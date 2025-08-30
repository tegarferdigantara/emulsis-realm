'use client'

import Header from '@/components/layout/Header'
import ChangePassword from '@/components/user/ChangePassword'

export default function ChangePasswordPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <ChangePassword />
    </div>
  )
}