import React from "react";
import { Box, useTheme } from "@chakra-ui/react";

export const Main: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            height="100vh"
            bg="main.100"
            color="white"
            textAlign="center"
            py={10}
        >
            <h1 style={{ fontSize: theme.fontSizes["5xl"] }}>Gökhan Öztürk</h1>
        </Box>
    );
};
