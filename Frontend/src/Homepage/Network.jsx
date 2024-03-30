import { Box, Center, Heading, Image } from "@chakra-ui/react";

function Network() {
  return (
    <div>
      <Center>
        <Box>
          <Heading fontSize={"60px"}>As Seen in ...</Heading>
        </Box>
      </Center>
      <Center>
        <Image src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fas-seen-large.b8f62a53.png&w=750&q=75" />
      </Center>
    </div>
  );
}

export default Network;
