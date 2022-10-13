import { Box } from "@chakra-ui/react";
import Content from "components/Content";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

function TC() {
  return (
    <Box>
      <Content>
        <Header />
      </Content>
      <Box>Terms & Condition</Box>
      <Footer />
    </Box>
  );
}

export default TC;
