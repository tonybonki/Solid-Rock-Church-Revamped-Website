import {
  Stack,
  Flex,
  Button,
  Text,
  Box,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeroWithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url('/images/sermon-img0.jpg')`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={"4xl"}
          align={"flex-start"}
          spacing={6}
        >
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
          {/* Social Media Icons */}
          {/* <Flex>
            <Box backgroundColor="red" width="50px" height="50px" />
            <Box backgroundColor="green" width="50px" height="50px" />
            <Box backgroundColor="blue" width="50px" height="50px" />
          </Flex> */}
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
