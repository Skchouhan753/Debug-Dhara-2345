import {
  Card,
  CardBody,
  Center,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";

function TalkWithExpert() {
  return (
    <div>
      <Center>
        <h1>From our experts</h1>
      </Center>

      <VStack gap={"50px"}>
        <Center>
          <Card
            w={"700px"}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
            p={"10px"}
            borderRadius={"10px"}
          >
            <CardBody>
              <Image
                src="https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fwp-content%2Fuploads%2F2016%2F01%2FThingsYoullLearn.jpg&w=1920&q=75"
                alt="Green double couch with wooden legs"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  11 Things You’ll Learn Using MyFitnessPal
                </Heading>
                <Text fontFamily={"sans-serif"} fontSize={"18px"}>
                  There’s no easier way to track your food, activity, steps,
                  water, weight and measurements than MyFitnessPal. That’s why
                  more than 200 million people use the app to to achieve their
                  health and fitness goals.
                </Text>
                <Link href="https://chakra-ui.com" isExternal color={"blue"}>
                  Read more on MyFitnessPal blog ›<ExternalLinkIcon mx="2px" />
                </Link>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Center>

        <Center>
          <Card
            w={"700px"}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
            p={"10px"}
            borderRadius={"10px"}
          >
            <CardBody>
              <Image
                src="https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fwp-content%2Fuploads%2F2021%2F01%2FEssential-Guide-to-Food-Logging-featured.jpg&w=1920&q=75"
                alt="Green double couch with wooden legs"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Essential Guide to Food Logging</Heading>
                <Text fontFamily={"sans-serif"} fontSize={"18px"}>
                  Whether your goal is to lose weight, build strength, perform
                  at your peak or improve your overall health, keeping an
                  accurate food journal of what you eat and drink is essential.
                  It provides valuable insight into your nutrition habits, so
                  you can see trends and make adjustments as needed.
                </Text>
                <Link href="https://chakra-ui.com" isExternal color={"blue"}>
                  Read more on MyFitnessPal blog ›<ExternalLinkIcon mx="2px" />
                </Link>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Center>

        <Center>
          <Card
            w={"700px"}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
            p={"10px"}
            borderRadius={"10px"}
          >
            <CardBody w={"100%"}>
              <Image
                src="https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fwp-content%2Fuploads%2F2017%2F12%2FEssential-Guide-to-Healthy-Eating-2.png&w=1920&q=75"
                alt="Green double couch with wooden legs"
                w={"100%"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Essential Guide to Healthy Eating</Heading>
                <Text fontFamily={"sans-serif"} fontSize={"18px"}>
                  When you start learning more about nutrition, it can seem
                  overwhelming. For people who are interested, there is
                  definitely a lot to learn and explore, but, in the end, basic
                  nutrition is quite simple. It’s so simple, in fact, that we
                  know you can eat better by focusing on these eight things.
                </Text>
                <Link
                  href="https://blog.myfitnesspal.com/essential-guide-to-healthy-eating/?_gl=1*4vebe0*_ga*MTU3NDM4MDk3OC4xNzExNjkzNjkx*_ga_VG80VV73C6*MTcxMTczMDgzMi43LjEuMTcxMTczMDg2Ny4wLjAuMA.."
                  isExternal
                  color={"blue"}
                >
                  Read more on MyFitnessPal blog ›<ExternalLinkIcon mx="2px" />
                </Link>
              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Center>
      </VStack>
    </div>
  );
}

export default TalkWithExpert;
