'use client'

import Header from '@/components/layout/Header'
import Profile from '@/components/user/Profile'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Profile />
    </div>
  )
}