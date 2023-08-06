import RootLayout from '@/components/Layout/RootLayout'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from './redux/store'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <Provider store={store}>
    <SessionProvider session={session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  </Provider>
}
