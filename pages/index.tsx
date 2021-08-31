import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Header, Main, Cards, Footer } from "@components";
import { useTitle } from "react-use";

const Home: React.FC = () => {
  useTitle("Gökhan Öztürk");
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Main />
      {/* <Cards /> */}
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Home;
