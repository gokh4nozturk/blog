import React from "react";
import { Box, useTheme, SimpleGrid } from "@chakra-ui/react";
import { Loading } from "@components/loading";

export const Main: React.FC = () => {
    const theme = useTheme();
    return (
        <SimpleGrid
            height="72.02vh"
            bg="main.100"
            color="white"
            placeItems="center"
            py={10}
            
        >
            <Loading />
        </SimpleGrid>
    );
};
