import { Grid, GridItem, Divider, Box } from '@chakra-ui/react'
import React from 'react'
import Login from "../components/Login";

const LoginRegisterPage = () => {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap="1px"
      bg="black"
      
    >
      <GridItem rowSpan={1} colSpan={1} bg="white" >
        <Login />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg='#FFFF' />
    </Grid>
  )
}

export default LoginRegisterPage;
