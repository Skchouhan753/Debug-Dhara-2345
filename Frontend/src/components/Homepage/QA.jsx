import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import "../Homepage/QA.css";
function QA() {
  return (
    <>
      <Center>
        <Heading fontSize={"50px"}>Q&A</Heading>
      </Center>

      <Center>
        <Box width="50%" className="Question-container">
          <Accordion defaultIndex={[0]} allowMultiple p={20}>
            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton className="AccordionButton">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="question-box"
                  >
                    <Center>
                      <h2>Is MyFitnessPal a free calorie tracker app ?</h2>
                    </Center>
                  </Box>
                  <AccordionIcon fontSize={"35px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="Panel">
                <Text p={2} fontSize={"20px"} m={"1px"} gap={"2px"}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            {/* second colume here  */}

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton
                  // border={"none"}
                  className="AccordionButton"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="question-box"
                  >
                    <Center p={"10px"}>
                      <h2>
                        How to track colories with a colories couter app like
                        MyFitnessPal
                      </h2>
                    </Center>
                  </Box>
                  <AccordionIcon fontSize={"35px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="Panel">
                <Center>
                  <Text p={2} fontSize={"20px"} m={"1px"} gap={"2px"}>
                    Yes! If you are looking for a free calorie counter app, you
                    are in the right place. Simply sign up for your free account
                    here and start tracking your food. The MyFitnessPal app does
                    a lot more than track calories in foods. You can also track
                    macros, vitamins, and other micronutrients and see how
                    everything you eat supports your goals. Want to level up
                    your goals? Upgrade to Premium! Unlock MyFitnessPal best
                    tools like Barcode Scan, Intermittent Fasting, and Custom
                    Macro GoalsIf youve never upgraded to MyFitnessPal Premium
                    or never started a Premium trial before, you are eligible
                    for a 1-month free trial.
                  </Text>
                </Center>
              </AccordionPanel>
            </AccordionItem>

            {/* Third colome  */}

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton className="AccordionButton">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="question-box"
                  >
                    <Center p={"10px"}>
                      <h2>What nutrition data can i track besides clories ?</h2>
                    </Center>
                  </Box>
                  <AccordionIcon fontSize={"35px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="Panel">
                <Text p={2} fontSize={"20px"} m={"1px"} gap={"2px"}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton className="AccordionButton">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="question-box"
                  >
                    <Center>
                      <h2>
                        Does MyFitnessPal use a BMI Calculator or BMR Calculator
                        to set goals
                      </h2>
                    </Center>
                  </Box>
                  <AccordionIcon fontSize={"35px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="Panel">
                <Text p={2} fontSize={"20px"} m={"1px"} gap={"2px"}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton className="AccordionButton">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="question-box"
                  >
                    <Center>
                      <h2>
                        Can I track weight workouts , water or Intermittent
                        Fasting ?
                      </h2>
                    </Center>
                  </Box>
                  <AccordionIcon fontSize={"35px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="Panel">
                <Text p={2} fontSize={"20px"} m={"1px"} gap={"2px"}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton className="AccordionButton">
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="question-box"
                  >
                    <Center>
                      <h2>Is MyFitnessPal a free calorie tracker app ?</h2>
                    </Center>
                  </Box>
                  <AccordionIcon fontSize={"35px"} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="Panel">
                <Text p={2} fontSize={"20px"} m={"1px"} gap={"2px"}>
                  Yes! If you are looking for a free calorie counter app, you
                  are in the right place. Simply sign up for your free account
                  here and start tracking your food. The MyFitnessPal app does a
                  lot more than track calories in foods. You can also track
                  macros, vitamins, and other micronutrients and see how
                  everything you eat supports your goals. Want to level up your
                  goals? Upgrade to Premium! Unlock MyFitnessPal best tools like
                  Barcode Scan, Intermittent Fasting, and Custom Macro GoalsIf
                  youve never upgraded to MyFitnessPal Premium or never started
                  a Premium trial before, you are eligible for a 1-month free
                  trial.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
    </>
  );
}

export default QA;
