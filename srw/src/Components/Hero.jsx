import {
  Stack,
  Flex,
  Button,
  Text,
  Box,
  VStack,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <HStack spacing={4}>
      <FaYoutube size={30} color="white" />
      <FaInstagram size={30} color="white" />
      <FaFacebook size={30} color="white" />
    </HStack>
  );
};

//Blobs created by AI used to style the hero page
const AbstractBlob = ({ children }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      overflow="hidden"
      zIndex={-1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path
          d="M0 100 C 30 150, 70 0, 100 100 C 130 200, 170 150, 200 100 V 200 H 0 V 100 Z"
          fill="rgba(0, 0, 0, 0.5)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 100, left: 0 }}
      >
        <path
          d="M0 100 C 30 150, 70 0, 100 100 C 130 200, 170 150, 200 100 V 200 H 0 V 100 Z"
          fill="rgba(0, 0, 0, 0.5)"
        />
      </svg>
      {children}
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex={-1}
      >
        <Box
          position="absolute"
          top="-50%"
          left="-50%"
          width="200%"
          height="200%"
          borderRadius="50%"
          transform="translate(-50%, -50%)"
          background="rgba(0, 0, 0, 0.3)"
        />
        {children}
      </Box>
    </Box>
  );
};


export default function HeroWithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url('/images/worship-img0.jpg')`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        backdropFilter={"blur(2px)"} // Adjust the blur amount as needed
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"4xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            letterSpacing={"0px"}
            textTransform={"uppercase"}
            fontSize={useBreakpointValue({ base: "3xl", md: "7xl" })}
          >
            Solid Rock Church
          </Text>

          <Text
            color={"white"}
            fontSize={useBreakpointValue({ base: "1xl", md: "20px" })}
          >
            We are a multicultural & multigenerational Church in Drogheda,
            Ireland. We believe that we are better together and want to jointly
            impact our community with God’s Love and get a glimpse of Heaven
            here on Earth in our lifetime. We invite you to join us!
          </Text>
          <AbstractBlob />
          {/* Social Media Icons */}
          {/* <Flex>
            <Box backgroundColor="red" width="50px" height="50px" />
            <Box backgroundColor="green" width="50px" height="50px" />
            <Box backgroundColor="blue" width="50px" height="50px" />
          </Flex> */}
          {/* <SocialMediaIcons /> */}
          <Stack direction={"row"}>
            <Button
              bg="black"
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.800" }}
              color={"white"}
              rounded={"full"}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              boxShadow="0 0 10px rgba(0, 0, 0, 0.10)"
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
