import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, Georgia, serif',
    mono: 'Menlo, monospace',
  },
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