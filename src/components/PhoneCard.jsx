import { Box, Text, Image } from "@chakra-ui/react";

const PhoneCard = ({ phone }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
    <Image
      src={`src/assets/phones/${phone.phoneImage}`}
      alt={phone.phoneName}
      style={{ width: "180px", height: "auto" }}
    />
    <Box textAlign={"center"}>
      <Text fontSize="xl">{phone.phoneName}</Text>
      {/* <Text fontSize="md">Category: {phone.phoneCategory}</Text> */}
      <Text fontSize="md">Price: {phone.phonePrice}</Text>
    </Box>
  </Box>
);
export default PhoneCard;
