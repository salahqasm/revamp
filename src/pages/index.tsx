import Image from 'next/image'
import { Inter } from 'next/font/google'
import Reducer from '@/components/useReducer'
import useTest from '@/components/Hooks/useTest'
import { useCallback, useState } from 'react'
import Test from '@/components/test'
import { useTheme } from '@/components/Context/ThemeContext'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const setTheme = useTheme()?.setTheme;

  return (
    <div>
      <button onClick={() => { setTheme && setTheme(prev => !prev) }}>
        Change</button>
      <main className='m-20'>
        <Test />
      </main>

    </div>
  );
}

