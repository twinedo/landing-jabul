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
    <Container maxW="1240px" py="50px">
      {children}
    </Container>
  );
}

export default Content;
