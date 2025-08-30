'use client'

import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Classes from '@/components/sections/Classes'
import Guilds from '@/components/sections/Guilds'
import News from '@/components/sections/News'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Classes />
      <Guilds />
      <News />
      <Footer />
    </div>
  )
}