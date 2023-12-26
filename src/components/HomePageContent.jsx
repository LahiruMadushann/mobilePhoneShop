
import { Grid, GridItem } from "@chakra-ui/react";
import PhoneCategory from "./PhoneCategory";
import DiscountSide from "./DiscountSide";
import MobilePhones from "./MobilePhones";

const HomePageContent = () => {
  return (
    <Grid
      templateAreas={`
                  "side category"
                  "side phone"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"25vw 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      marginX='4vw'
    >
      
      <GridItem padding={3} area={"side"}>
        <DiscountSide />
      </GridItem>
      <GridItem  area={"category"}>
        <PhoneCategory />
      </GridItem>
      <GridItem mt='7vh' area={"phone"}>
        <MobilePhones />
      </GridItem>
    </Grid>
    
  );
};

export default HomePageContent;
