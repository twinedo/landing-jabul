import { Box } from "@chakra-ui/react";
import Content from "components/Content";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

function PrivacyPolicy() {
  return (
    <Box>
      <Content>
        <Header />
      </Content>
      <Box>Privacy Policy</Box>
      <Footer />
    </Box>
  );
}

export default PrivacyPolicy;
