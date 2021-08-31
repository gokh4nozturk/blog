import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Logo } from "@components";
import Menu from "@components/menu";

export const Header: React.FC = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      columns={2}
      spacing={5}
      px={20}
      py={5}
      bg="header.200"
    >
      <Logo />
      <Menu />
    </Flex>
  );
};
