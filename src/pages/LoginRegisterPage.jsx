import { Grid, GridItem, Divider, Box } from '@chakra-ui/react'
import React from 'react'

const LoginRegisterPage = () => {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap="1px"
      bg="black"
      
    >
      <GridItem rowSpan={1} colSpan={1} bg="white" />
      <GridItem rowSpan={1} colSpan={1} bg='#FFFF' />
    </Grid>
  )
}

export default LoginRegisterPage;
