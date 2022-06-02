import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../ui/themes/themes'
import Cabecalho from '../ui/components/header/header'

function MyApp({ Component, pageProps }: AppProps) {
  return( <ThemeProvider theme = { theme } >
    <Cabecalho/>
    <Component {...pageProps} />

  </ThemeProvider>
  );

}

export default MyApp
