import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { TbTruckDelivery } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { GrPowerCycle } from "react-icons/gr";
import { TfiCreditCard } from "react-icons/tfi";
import { AiOutlineTag } from "react-icons/ai";

const ValueProposition = () => {
  return (
    <Box>
        <HStack marginX='4vw' padding='1.5vw' justifyContent='space-between' borderWidth={1} borderRadius={10} borderColor='blackAlpha.400' >
            <Box>
              <HStack>
                  <TbTruckDelivery size='2vw' color='#3839af' opacity={0.8} />
                <Box>
                  <Text color='#0c0c27' fontWeight='bold'>Island-wide Next Day</Text> 
                  <Text> Delivery</Text>
                </Box>
                
              </HStack>  
            </Box>
            <Box>|</Box>
            <Box>
            <HStack>
                  <VscFeedback size='2vw' color='#3839af' opacity={0.8} />
                <Box>
                  <Text color='#0c0c27' fontWeight='bold'>99% Customer</Text> 
                  <Text> Feedbacks</Text>
                </Box>   
            </HStack> 
            </Box>
            <Box>|</Box>
            <Box>
            <HStack>
                  <GrPowerCycle size='2vw' color='#3839af' opacity={0.8} />
                <Box>
                  <Text color='#0c0c27' fontWeight='bold'>Warranty Add-ons</Text> 
                  <Text> Available</Text>
                </Box>   
            </HStack> 
            </Box>
            <Box>|</Box>
            <Box>
            <HStack>
                  <TfiCreditCard size='2vw' color='#3839af' opacity={0.8} />
                <Box>
                  <Text color='#0c0c27' fontWeight='bold'>Leading Credit Cards</Text> 
                  <Text> & Cash on Delivery</Text>
                </Box>   
            </HStack> 
            </Box>
            <Box>|</Box>
            <Box>
            <HStack>
                  <AiOutlineTag size='2vw' color='#3839af' opacity={0.8} />
                <Box>
                  <Text color='#0c0c27' fontWeight='bold'>Genuine Devices</Text> 
                  <Text> with Warranty</Text>
                </Box>   
            </HStack> 
              
            </Box>
        </HStack>
    </Box>
  )
}

export default ValueProposition