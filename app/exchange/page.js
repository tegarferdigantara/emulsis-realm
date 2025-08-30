'use client'

import Header from '@/components/layout/Header'
import ExchangeMall from '@/components/pages/ExchangeMall'

export default function ExchangePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <ExchangeMall />
    </div>
  )
}