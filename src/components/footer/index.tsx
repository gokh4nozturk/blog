import React, { CSSProperties } from "react";
import { Flex, Center } from "@chakra-ui/react";

import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from "@components/icons";

export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
        marginRight: "0.25rem",
        marginLeft: "0.25rem",
    };
    return (
        <Center bg="main.100" py={10}>
            <Flex flexDirection="column">
                <Flex mt={5}>
                    <a
                        href="https://github.com/gokhannozturk"
                        target="_blank"
                        style={iconStyle}
                    >
                        <GithubIcon color="white" width="28" height="29" />
                    </a>
                    <a
                        href="https://twitter.com/bygkhnozturk"
                        target="_blank"
                        style={iconStyle}
                    >
                        <TwitterIcon color="white" width="28" height="28" />
                    </a>
                    <a target="_blank" style={iconStyle}>
                        <YoutubeIcon color="white" width="28" height="29" />
                    </a>
                    <a target="_blank" style={iconStyle}>
                        <LinkedinIcon color="white" width="28" height="32" />
                    </a>
                </Flex>
            </Flex>
        </Center>
    );
};
