'use client'

import Header from '@/components/layout/Header'
import TopUp from '@/components/pages/TopUp'

export default function TopUpPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <TopUp />
    </div>
  )
}