import RootLayout from '@/components/Layout/RootLayout'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <SessionProvider session={session}>
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
        <Toaster />
      </RootLayout>
    </Provider>
  </SessionProvider>
}
