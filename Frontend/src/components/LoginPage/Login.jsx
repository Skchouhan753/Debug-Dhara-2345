import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

function Login() {
  return (
    <div>
      <Center m={"22%"}>
        <Box
          w={"500px"}
          boxShadow={
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
          }
          p={"50px"}
          borderRadius={"10px"}
        >
          <Heading textAlign={"center"}>Member Login</Heading>
          <VStack>
            <FormControl isRequired>
              <Input
                placeholder="Email"
                w="300px"
                h={"50px"}
                border={"none"}
                boxShadow={
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                }
                borderRadius={"5px"}
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                placeholder="Password"
                type="password"
                w={"300px"}
                h={"50px"}
                border={"none"}
                boxShadow={
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                }
                borderRadius={"5px"}
              />
            </FormControl>
            <Button
              bg={"#1943CF"}
              w={"310px"}
              h={"40px"}
              border={"none"}
              borderRadius={"10px"}
              color={"white"}
              fontSize={"18px"}
              padding={"28px"}
              cursor={"pointer"}
            >
              Login
            </Button>
            or
            <Button
              bg={"#EBEBF0"}
              w={"310px"}
              h={"40px"}
              border={"none"}
              borderRadius={"10px"}
              color={"black"}
              fontSize={"18px"}
              padding={"28px"}
              cursor={"pointer"}
            >
              Sign in with Google
            </Button>
          </VStack>
        </Box>
      </Center>
    </div>
  );
}

export default Login;
