import { ModeToggle } from '@/components/mode-toggle'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <div className='flex justify-end w-full p-5'>
        <ModeToggle />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
