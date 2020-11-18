import React from "react";
import { Box, Flex, Text } from "@blend-ui/core";

export default { title: "Welcome" };

export const wc = () => (
  <React.Fragment>
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Box width="200px" p={30} border="2px solid" borderRadius={4}>
        <Text textAlign="center" textStyle="h3">
          Center this
        </Text>
      </Box>
    </Flex>
  </React.Fragment>
);
wc.story = {
  name: "Welcome",
};
