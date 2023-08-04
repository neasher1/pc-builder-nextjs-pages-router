import RootLayout from '@/components/Layout/RootLayout'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <SessionProvider session={session}>
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  </SessionProvider>
}
