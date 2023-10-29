import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThirdwebProvider } from "../components/ThirdwebProvider";
import Header from '../components/Header';
import { Sepolia } from '@thirdweb-dev/chains';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lottery 99',
  description: 'Web3.0 Crypto Lottery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#091b18] min-h-screen flex flex-col max-w-screen-xl mx-auto py-5 px-8">
        <ThirdwebProvider
          activeChain={Sepolia}
          clientId={process.env.THIRDWEB_CLIENT_ID}
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThirdwebProvider>
      </body>
    </html>
  )
}
