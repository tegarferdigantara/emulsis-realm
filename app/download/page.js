'use client'

import Header from '@/components/layout/Header'
import Download from '@/components/pages/Download'

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Download />
    </div>
  )
}