import { Grid, GridItem, } from '@chakra-ui/react'
import Login from "../components/Login";
import Registration from "../components/Registration";
import Navbar from "../components/NavBar";

const LoginRegisterPage = () => {
  return (
    <Grid
      h='100vh'
      templateRows='repeat(1, 1fr)'
      templateColumns='repeat(2, 1fr)'
      gap="1px"

      
    >
      <GridItem rowSpan={1} colSpan={2}   >
        <Navbar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} gap="3px"  >
        <Login />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} gap="3px" borderLeft="1px" borderColor="black" >
        <Registration />
      </GridItem>
    </Grid>
  )
}

export default LoginRegisterPage;
