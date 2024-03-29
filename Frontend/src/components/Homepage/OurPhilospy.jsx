import { Box, Center, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
function OurPhilosophy() {
  return (
    <Box p={4}>
      <SimpleGrid columns={2} gap={4}>
        <Box>
          <Center>
            <Stack direction="row">
              <Image
                boxSize="100px"
                marginTop={"50px"}
                h={"150px"}
                borderRadius={"10px"}
                objectFit="cover"
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frunning-full.47a28cc6.png&w=256&q=75"
                alt="Dan Abramov"
              />
              <Image
                boxSize="200px"
                h={"300px"}
                borderRadius={"10px"}
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdietician-large.b7f105f2.png&w=512&q=75"
                alt="Dan Abramov"
              />

              <Image
                boxSize="100px"
                h={"150px"}
                borderRadius={"10px"}
                marginTop={"50px"}
                objectFit="cover"
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffood-full.9c63c65e.png&w=256&q=75"
                alt="Dan Abramov"
              />
            </Stack>
          </Center>
        </Box>
        <Box w={"80%"}>
          <Text fontSize={"25px"}>Our Philosophy</Text>
          <Box>
            <Text fontSize="25px">
              <h1>Knowledge is power</h1>
            </Text>
            <Box>
              <Text fontSize={"20px"}>
                “Studies show people who keep a food diary are more likely to
                hit their goals. MyFitnessPal simplifies nutrition and calorie
                tracking, provides the data you want, and helps you make sense
                of it all.
              </Text>
              <Text fontSize={"20px"}>
                Healthy eating is a continuous journey of self-discovery. And
                the more you track, the more empowered you’ll become to make
                healthy choices that support your goals.”
              </Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default OurPhilosophy;
