import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo/logo.webp'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} width='16vw' height='28vh'  alt="logo" />
        <SearchBar />
    </HStack>
        
    
  )
}

export default Navbar