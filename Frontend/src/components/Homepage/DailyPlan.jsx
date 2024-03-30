import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

function DailyPlan() {
  return (
    <Container maxW="100%" bg="#0066EE" m={"20px"}>
      <Center>
        <Box w="50%">
          <VStack p="10%" textAlign="center" color={"white"}>
            <p> Have 2 mins?</p>
            <Text fontSize="50px">Get your personalized daily plan</Text>

            <Button
              colorScheme="blue"
              borderRadius="30px"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
              w="250px"
              h="50px"
              color={"blue"}
              border={"none"}
            >
              TAKE THE QUIZ
            </Button>
          </VStack>
        </Box>
        <Box w="50%">
          <Image
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaily-plan.084be84e.png&w=320&q=75"
            paddingTop="5%"
            marginLeft="20%"
          />
        </Box>
      </Center>
    </Container>
  );
}

export default DailyPlan;
