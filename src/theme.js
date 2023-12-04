import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: 'default',
        bg: '#FFFFFF',
      },
    }),
  },
})
export default theme; 