import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'node_modules/'
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
