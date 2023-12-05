import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo/logo.webp'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='14vw'  alt="logo" />
    </HStack>
        
    
  )
}

export default Navbar