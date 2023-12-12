import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Box,
  Image,
  Center,
  HStack,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import appleHeadSet from "../assets/discount/Apple-Type-C-Headset.webp";
import { GrNext } from "react-icons/gr";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const DiscountSide = () => {
  return (
    <Card height="87vh" bg="white" borderColor="#3839af" borderWidth="2px">
      <CardBody borderColor='red'>
        <Text
          color="blackAlpha.900"
          fontSize="1.5vw"
          borderWidth={1}
          borderBottomColor="blackAlpha.400"
          fontWeight="bold"
        >
          Hurry up before the stocks runs out!
        </Text>
        <Box mt="4vh">
          <Text color="#3839af">Rs 14 990.00</Text>
          <Text color="blackAlpha.700">Apple EarPods (USB-C)</Text>
          <Center>
            <Image
              justifyContent="center"
              src={appleHeadSet}
              width="16vw"
              height="28vh"
              alt="logo"
            />
          </Center>
          <HStack
            color="blackAlpha.800"
            fontWeight="bold"
            justifyContent="space-between"
            mt="4vh"
          >
            <Text>Available: 18</Text>
            <Text>Already Sold: 2</Text>
          </HStack>
          <Box
            bg="gray.200"
            h="20px"
            w="100%"
            position="relative"
            borderRadius="md"
            mt="2vh"
          >
            <Box bg="#3839af" h="100%" w="20%" borderRadius="md" />
          </Box>
          <Box borderWidth={1} mt="12vh" borderBottomColor="blackAlpha.400" />
          <ButtonGroup mt="4vh" variant="outline" spacing="6">
            <HStack>
              <Button color="blackAlpha.800">
                <MdOutlineArrowBackIosNew />{" "}
                <Text padding={2}>Previous deal</Text>
              </Button>
              <Box height={5} width="0.1px" bg="blackAlpha.400" />
              <Button color="blackAlpha.800">
                <Text padding={2}> Next deal</Text> <GrNext />
              </Button>
            </HStack>
          </ButtonGroup>
        </Box>
      </CardBody>
    </Card>
  );
};

export default DiscountSide;
