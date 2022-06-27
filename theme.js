import { extendTheme } from '@chakra-ui/react'
import { Card } from './assets/fonts/styles/cardStyles'

const theme = extendTheme({
  fonts: {
    heading: `'Gopher', sans-serif`,
    body: `'Hellix', sans-serif`,
  },
  components: {
    Card
  }
})

export default theme