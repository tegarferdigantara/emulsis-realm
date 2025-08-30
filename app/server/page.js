'use client'

import Header from '@/components/layout/Header'
import ServerInfo from '@/components/pages/ServerInfo'

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <ServerInfo />
    </div>
  )
}