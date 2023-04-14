import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // tailwind css for styling
    <h1 className = "text-red-400"> Hello World </h1>
  )
}
