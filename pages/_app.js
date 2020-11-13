import { Box } from 'rebass'
import { ContextWrapper } from '../components/ContextWrapper'
import { Header } from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Box>
    <head>
      <title>Practice Point</title>
    </head>
    <ContextWrapper>
    <Component {...pageProps} />
    </ContextWrapper>
 
  </Box>
}

export default MyApp
