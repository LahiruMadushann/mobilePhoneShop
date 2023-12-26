import React from "react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import {
  Grid,
  GridItem,
  Link as ChakraLink,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";

const Header = () => {
  return (
    
    <HStack fontWeight='300' color='#444444' opacity={0.9} fontSize={13} justifyContent="space-between" paddingY={2.5} paddingX={8} >
      <Text>Quality Guarantee of products</Text>
      <Text>|</Text>
      <Text>Fast returning program</Text>
      <Text>|</Text>
      <Text>No additional fees</Text>
      <Spacer />
      <FaUser />
      <Link className="underline " to={'/loginRegister'}>Register or Sign In</Link>
      
    </HStack>
  );
};

export default Header;
