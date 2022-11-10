import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Content from "components/Content";
import Image from "next/image";
import React from "react";

function Promo() {
  return (
    <Box
      bg="#76C043"
      bgImage="url('/images/bg_promo.png')"
      bgRepeat="no-repeat"
      // bgSize="cover"
      height="586px"
    >
      {/* <Content> */}
      <Flex height="586px" flexDirection="row" justifyContent="center">
        <Flex flex={2} justify="center">
          <Stack h="100%" w="80%" justify="center">
            <Content>
              <Stack spacing="5">
                <Text
                  fontWeight="800"
                  lineHeight="40px"
                  fontSize={34}
                  color="white"
                >
                  Serbu Promo <br /> Menarik dari JABULMART
                </Text>
                <Text color="white" lineHeight="24px" fontSize={20}>
                  Temukan dan nikmati aneka promo produk finansial terbaik
                  spesial untuk kamu!
                </Text>
                <Box>
                  <Button
                    bg="#E4FFD1"
                    color="#F6873E"
                    _hover={{ bg: "#E4FFD1" }}
                  >
                    <Text>Lihat promo lainnya</Text>
                  </Button>
                </Box>
              </Stack>
            </Content>
          </Stack>
        </Flex>
        <Flex flex={2} overflow="hidden" justify="center">
          <Stack direction="row" align="center" overflow="hidden">
            {Array(3)
              .fill(3)
              .map((o, i) => (
                <Box key={i}>
                  <Image
                    src="/images/promo1.png"
                    width={500}
                    height={287}
                    alt="promo1"
                  />
                </Box>
              ))}
          </Stack>
        </Flex>
      </Flex>
      <Stack spacing={5} py="30px"></Stack>
      {/* </Content> */}
    </Box>
  );
}

export default Promo;
