'use client'

import Header from '@/components/layout/Header'
import Settings from '@/components/user/Settings'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Settings />
    </div>
  )
}