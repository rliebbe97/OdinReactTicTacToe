'use client'

import Image from 'next/image'
import Board from '@/components/Board'
import Game from '@/components/Game'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Game></Game>
    </main>
  )
}
