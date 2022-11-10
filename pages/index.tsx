import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Content from "components/Content";
import Footer from "components/Footer";
import Header from "components/Header";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import { FaLongArrowAltRight } from "react-icons/fa";
import Hero from "components/Hero";
import Mengapa from "components/Section/Mengapa";
import Howto from "components/Section/Howto";
import Promo from "components/Section/Promo";
import Download from "components/Section/Download";
import AreaLayanan from "components/Section/AreaLayanan";
import FAQ from "components/Section/FAQ";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Mengapa />
      <Howto />
      <Promo />
      <Download />
      <AreaLayanan />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default Home;
