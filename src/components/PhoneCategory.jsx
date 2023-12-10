import { HStack, Text, Divider  } from '@chakra-ui/react'
import React from 'react'

const PhoneCategory = () => {
  return (
    <HStack fontSize='1.2em' justifyContent='space-between' borderWidth={1} borderBottomColor='blackAlpha.400' mt='3vh' padding={3}>
        <Text>Apple</Text>
        <Text>Best Selling</Text>
        <Text>Dealz</Text>
        <Text>Samsung</Text>
        <Text>Xiaomi</Text>
        <Text>OPPO</Text>
    </HStack>   
  )
}

export default PhoneCategory