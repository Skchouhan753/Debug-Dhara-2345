import { Box, Heading, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TrendingArticle = [
  {
    id: 1,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/49723-featured-700x400.jpg",
    des: "3 Metabolism-Boosting Micronutrients For Weight Loss",
  },
  {
    id: 2,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/41628-featured-700x400.jpg",
    des: "10 Walking Mistakes to Avoid if You Want to Lose Weight",
  },
  {
    id: 3,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12131-featured-700x400.jpg",
    des: "Apple Pie Breakfast Bowl",
  },
  {
    id: 4,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/19653-featured-700x400.jpg",
    des: "How to Establish a Healthy Morning Routine",
  },
  {
    id: 5,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg",
    des: "Essential Guide to MyFitnessPall Premium",
  },
  {
    id: 6,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/30083-featured-700x400.jpg",
    des: "Your 6-Week Belly Fat Blasting Walking Plan",
  },
  {
    id: 7,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/28920-featured-700x400.jpg",
    des: "Your 10-minute, No-Equipment, Total-Body Workout",
  },
  {
    id: 8,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/12547-featured-700x400.jpg",
    des: "15 Make-Ahead Breakfasts Under 300 Calories",
  },
  {
    id: 9,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/52179-featured-700x400.jpg",
    des: "Your Home Screen is Getting a Makeover",
  },
  {
    id: 10,
    img: "https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/46597-featured-700x400.jpg",
    des: "Nutrition Extras to Boost Mental and Physical Performance",
  },
];

const TrendingArticles = () => {
  return (
    <Box>
      <Box className="TRENDINGDiv">
        <Heading as="h2" size="md">
          TRENDING ARTICLES
        </Heading>
      </Box>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={2000} // Adjust interval as needed
      >
        {TrendingArticle.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.des} />
            <div className="legend">
              <Text>{item.des}</Text>
            </div>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default TrendingArticles;
