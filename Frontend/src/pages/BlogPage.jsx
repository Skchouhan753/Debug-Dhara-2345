import { Box, Grid, Text, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import TrendingArticles from "./TrendingArticles";
import LatestArticle from "./LatestArticle";
// TrendingArticles Component
// const TrendingArticles = () => {
//   return (
//     <Box>
//       <Text fontSize="xl" fontWeight="bold" mb={4}>
//         Trending Articles
//       </Text>
//       <Grid
//         templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
//         gap={4}
//         mb={4}
//       >
//
//         {/* Render Trending Articles Here */}
//       </Grid>
//       <Button variant="outline" colorScheme="blue" size="sm" fontWeight="bold">
//         Load More
//       </Button>
//     </Box>
//   );
// };

// LatestArticles Component
const LatestArticles = () => {
  return (
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Latest Articles
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        mb={4}
      >
        {/* Render Latest Articles Here */}
      </Grid>
      <Button variant="outline" colorScheme="blue" size="sm" fontWeight="bold">
        Load More
      </Button>
    </Box>
  );
};

// BlogPage Component
const BlogPage = () => {
  return (
    <Box w="70%" m="auto" px={{ base: "4", md: "20" }} py="8">
      {/* <BlogNav/> */}
      <Box className="blogMainContainer">
        <TrendingArticles />
        <LatestArticle />
      </Box>
    </Box>
  );
};

export default BlogPage;
