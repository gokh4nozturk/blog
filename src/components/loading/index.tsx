import { Flex } from "@chakra-ui/layout";
import React from "react";


export const Loading: React.FC = () => {
    return (
        <Flex justify="space-between" align="center" style={{ width: "200px" }}>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </Flex>
    );
};
