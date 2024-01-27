import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './include/footer'
import Header from './include/header'
import { CounterProvider } from './lib/CounterContext';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login Account',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CounterProvider>
        <Header />
          {children}
        < Footer />
      </CounterProvider>
        
        </body>
    </html>
  )
}
