import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Content from "components/Content";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <Box bg="#FFFFFF">
      <Content>
        <Box
          h="716px"
          p="10"
          bgImage="url('/images/bg_hero.png')"
          w="100%"
          bgSize="1240px 716px"
          bgRepeat="no-repeat"
        >
          <Flex
            flexDirection="row"
            h="100%"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Flex flex={1} flexDirection="column" alignItems="flex-start" p="5">
              <Stack spacing={5}>
                <Stack spacing="3">
                  <Text
                    fontWeight="600"
                    fontSize={64}
                    color="#FFA000"
                    lineHeight="72px"
                  >
                    Groceries
                  </Text>
                  <Text color="white" fontSize={60} lineHeight="72px">
                    delivered in easy way
                  </Text>
                </Stack>
                <Text
                  fontSize={18}
                  align="justify"
                  color="white"
                  lineHeight="24px"
                  maxW="393px"
                >
                  Jabulmart adalah portal layanan belanja kebutuhan rumah online
                  untukmu. Ucapkan selamat tinggal ke antrian panjang, toko yang
                  padat, & kemacetan! <br />
                  Tambahkan sayuran segar, perlengkapan rumah tangga, dan
                  lainnya ke troli dan pesananmu bisa dikirimkan di hari yang
                  sama.
                </Text>
                <Box>
                  <Button
                    bg="#E4FFD1"
                    // w="30%"
                    color="#F6873E"
                    cursor="pointer"
                    _hover={{ bg: "#696969", color: "black" }}
                  >
                    <Stack direction="row" spacing="3">
                      <Text>Get Started</Text>
                      <FaLongArrowAltRight />
                    </Stack>
                  </Button>
                </Box>
              </Stack>
            </Flex>
            <Flex
              flex={1}
              // borderWidth={1}
              // borderColor="black"
              justifyContent="center"
            >
              {/* <Image src={url} alt="image" width="100px" height="100px" /> */}
            </Flex>
          </Flex>
        </Box>
      </Content>
    </Box>
  );
}

export default Hero;
