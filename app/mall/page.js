'use client'

import Header from '@/components/layout/Header'
import ItemMall from '@/components/pages/ItemMall'

export default function MallPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <ItemMall />
    </div>
  )
}