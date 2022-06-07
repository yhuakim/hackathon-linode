import {ChakraProvider} from '@chakra-ui/react'
import Gopher from '../assets/fonts/gopher/Gopher'
import Hellix from '../assets/fonts/hellix/Hellix'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Gopher/>
      <Hellix />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp