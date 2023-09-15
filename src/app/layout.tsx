'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'School Manegement',
  description: 'A web application for managing schools and educational institutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
