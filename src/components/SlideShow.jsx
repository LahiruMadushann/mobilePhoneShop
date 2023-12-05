import React, { useState, useEffect } from "react";
import { Box, Image, Center, HStack, Circle, } from "@chakra-ui/react";


const images = [
  "https://img.freepik.com/premium-psd/online-shop-store-with-smartphone-mockups-template-shopping-elements-designs-concept-marketing-online-with-clipping-path-3d-rendering_42098-435.jpg",
  "https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg",
  "https://img.freepik.com/premium-vector/product-advertising-hero-image-header-layout_1302-21013.jpg",
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex + 1;
        if (newIndex === images.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <Center h="80vh">
      <Box>
        <Image src={images[index]} alt="Slideshow" width='100vw' height='50vh' />
        <HStack justify="center" mt='-5'>
          {images.map((image, imageIndex) => (
            <Circle
              size="10px"
              bg={imageIndex === index ? "blue.500" : "gray.500"}
              key={image}
            />
          ))}
        </HStack>
      </Box>
    </Center>
  );
}

export default Slideshow;
