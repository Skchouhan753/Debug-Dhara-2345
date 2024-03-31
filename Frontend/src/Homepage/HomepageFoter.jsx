import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";

function HomepageFooter() {
  return (
    <Box bg={"#151824"} color={"white"} py={{ base: "6", md: "12" }}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: "6", md: "12" }}
        alignItems="center"
        justifyItems="center"
        px={{ base: "6", md: "12" }}
        maxW="1200px"
        mx="auto"
      >
        <Box
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "6", md: "0" }}
        >
          <Heading
            as="h3"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
          >
            Find your healthy, and your happy.
          </Heading>
        </Box>
        <Box textAlign="center" mb={{ base: "6", md: "0" }}>
          <Button
            color={"#0066EE"}
            bg={"#EBEBF0"}
            w={{ base: "100%", md: "250px" }}
            h={"50px"}
            fontSize={{ base: "xl", md: "2xl" }}
            borderRadius={"15px"}
          >
            START TODAY
          </Button>
        </Box>
        <Box textAlign="center">
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb="4">
            Products
          </Text>
          <Text>Food</Text>
          <Text>Exercise</Text>
          <Text>Apps</Text>
          <Text>Premium</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb="4">
            Resources
          </Text>
          <Text>Blog</Text>
          <Text>Community</Text>
          <Text>Contact Us</Text>
          <Text>Support Center</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb="4">
            Company
          </Text>
          <Text>About Us</Text>
          <Text>Careers</Text>
          <Text>Press</Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default HomepageFooter;
