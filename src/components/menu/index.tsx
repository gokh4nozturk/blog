import React from "react";

import { Box, Flex } from "@chakra-ui/layout";
import { MoonIcon } from "@components/icons";

const Menu: React.FC = () => {
  return (
    <Flex width="20vw" maxWidth="20vw" align="center" justify="space-between">
      <Box>Writing</Box>
      <Box>Reading</Box>
      <Box>Speaking</Box>
      <MoonIcon />
    </Flex>
  );
};

export default Menu;
