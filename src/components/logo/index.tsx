import React from "react";

import { LogoIcon } from "@components/icons";
import { Box, Flex } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/react";

export const Logo: React.FC = () => {
  const theme = useTheme();
  return (
    <Flex align="center">
      <LogoIcon color="white" />
      <Box paddingLeft="0.5em" style={{ fontSize: theme.fontSizes["xl"] }}>
        Gökhan Öztürk
      </Box>
    </Flex>
  );
};
