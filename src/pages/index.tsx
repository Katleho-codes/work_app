import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Navbar from '../../public/Navbar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h1 className="text-4xl">Test</h1>
      </main>
    </>
  )
}
