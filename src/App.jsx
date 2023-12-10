import { Text } from "@chakra-ui/react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import Slideshow from "./components/SlideShow";
import Navbar from "./components/Navbar";
import ValueProposition from "./components/ValueProposition";
import HomePageContent from "./components/HomePageContent";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "nav nav" "nav nav" "main main"`,
        lg: `"header header" "nav nav" "nav nav" "nav nav" "main main"`,
      }}
      color="blackAlpha.700"
    >
      <Show above="lg">
        <GridItem h={10} pl="2" bg="#F4F4F4" area={"header"}>
          <Header />
        </GridItem>
      </Show>
      <GridItem marginTop='-6vh'  area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem width="100vw" mt='8.5vh'  area={"nav"}>
        <Slideshow />
      </GridItem>
      <GridItem width="100vw" mt='86vh'  area={"nav"}>
        <ValueProposition />
      </GridItem>
      <GridItem width="100vw" mt='2vh'  area={"main"}>
        <HomePageContent />
      </GridItem>
      {/* <GridItem pl="2" bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem> */}
    </Grid>
  );
}

export default App;
