import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TODO: title',
  description: 'TODO: description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="stylesheet" href="components/Atropos/main.css" />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
