import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <h1 className="text-4xl">The ultimate teams app</h1>
      </main>
    </>
  )
}
