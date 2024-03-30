import { Flex, Box, Text, Button } from "@chakra-ui/react";
import {
  FaHome,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogNav = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      py={4}
      px={6}
      bg="blue.500"
      color="white"
    >
      <Box>
        <Link to="/">
          <Button leftIcon={<FaHome />} variant="link">
            Home
          </Button>
        </Link>
      </Box>
      <Box>
        <Link to="/myHome">
          <img src="/path/to/logo.png" alt="Logo" />
        </Link>
      </Box>
      <Box>
        <FaFacebookSquare fontSize="24px" mr={2} />
        <FaTwitterSquare fontSize="24px" mr={2} />
        <FaInstagram fontSize="24px" mr={2} />
        <FaPinterest fontSize="24px" mr={2} />
        <FaSearch fontSize="24px" />
      </Box>
      <Flex align="center">
        <Text cursor="pointer" mr={4}>
          RECIPES
        </Text>
        <Text cursor="pointer" mr={4}>
          NUTRITION
        </Text>
        <Text cursor="pointer" mr={4}>
          WEIGHT LOSS
        </Text>
        <Text cursor="pointer" mr={4}>
          FITNESS
        </Text>
        <Text cursor="pointer" mr={4}>
          INSPIRATION
        </Text>
        <Text cursor="pointer" mr={4}>
          ESSENTIALS
        </Text>
        <Text cursor="pointer" mr={4}>
          VIDEO
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogNav;
