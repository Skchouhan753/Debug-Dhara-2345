import { Box, Grid, Heading, Text, Image, Link } from "@chakra-ui/react";

const articles = [
  {
    id: 1,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2021/07/Featured200smooth-1-1140x545.jpg",
    des: "Mixed Berry Tart",
  },
  {
    id: 2,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Mixed-Berry-Tart-2-750x592.jpg.webp",
    des: "15 Festive Fourth of July Recipes Under 425 Calories",
  },
  {
    id: 3,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2019/07/15-Festive-Fourth-of-July-Recipes-Under-425-Calories-750x592.jpeg.webp",
    des: "5 Ways to Progress From Walking to Running",
  },
  {
    id: 4,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2021/01/5-Ways-to-Progress-From-Walking-to-Running-750x592.jpg",
    des: "How Much Water Should You Actually Drink?",
  },
  {
    id: 5,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2021/09/How-Much-Water-Should-You-Actually-Drink-750x592.jpg",
    des: "9 Healthy Burger Recipes Under 450 Calories",
  },
  {
    id: 6,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/2022/06/9-Healthy-Burger-Recipes-Under-450-Calories-750x592.jpeg",
    des: "How an Athlete’s Weight Impacts Macro Needs",
  },
];

const LatestArticles = () => {
  return (
    <Box as="section">
      <Heading as="h2" mt="10%">
        LATEST ARTICLES
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
        {articles.map((article) => (
          <Box key={article.id}>
            <Box as="article" w="80%" m="auto">
              <Box>
                <Link href="#">
                  <Image
                    src={article.img}
                    alt={article.id}
                    w="100%"
                    h="auto"
                    objectFit="cover"
                  />
                </Link>
                <Box>
                  <Text fontSize="md">{article.des}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
      <Box mt="4">
        <Link href="https://blog.myfitnesspal.com/page/2/">
          <Text>Load More</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default LatestArticles;
