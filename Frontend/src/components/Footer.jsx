import { Box, Flex, Text, Select } from "@chakra-ui/react";

function Footer() {
  return (
    <Box backgroundColor="rgb(244, 249, 251)" py="4">
      <Flex
        maxW="95%"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexWrap="wrap" mr={{ base: 0, md: "18%" }}>
          <Text fontSize="sm" mr="2" color="blue">
            <a
              href="https://www.myfitnesspal.com/"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Calorie Counter
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Blog
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Terms
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Privacy
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Contact Us
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              API
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Jobs
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Feedback
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Community Guidelines
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Ad Choices
            </a>
          </Text>
          <Text fontSize="sm" mr="2" color="blue">
            <a href="#" style={{ textDecoration: "none", color: "blue" }}>
              Do Not Sell My Personal Information
            </a>
          </Text>
        </Flex>
        <Select w="120px" fontSize="sm" borderWidth="1px">
          <option value="">English</option>
          <option value="">Bengali</option>
          <option value="">Albanian</option>
          <option value="">Bambara</option>
          <option value="">Chinese</option>
          <option value="">Estonian</option>
          <option value="">French</option>
          <option value="">Greek</option>
          <option value="">Hmong</option>
          <option value="">Italian</option>
          <option value="">Japanese</option>
        </Select>
      </Flex>
      <Text fontSize="xs" textAlign="center" mt="2" color="black">
        © 2022 MyFitnessPal, Inc.
      </Text>
    </Box>
  );
}

export default Footer;
