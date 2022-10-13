import { Container } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Content(props: ContainerProps) {
  const { children } = props;
  return (
    <Container maxW="container.lg">
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </Container>
  );
}

export default Content;
