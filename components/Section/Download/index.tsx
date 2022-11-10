import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Content from "components/Content";
import Image from "next/image";
import React from "react";

function Download() {
  return (
    <Box>
      <Content>
        <Stack spacing="5" maxW="608px">
          <Text fontSize="40px" color="#92E25A" lineHeight="48px">
            Belanja dimana pun, kapan pun, menjadi lebih mudah dan murah
          </Text>
          <Text color="black" lineHeight="24px" fontSize="20px">
            Ayo download Apps Jabulmart di Smartphone kesayangan anda
          </Text>
        </Stack>
        <Box mt="50px">
          <Flex flexDirection="row" h="100%" justifyContent="space-evenly">
            <Flex flex={1} justifyContent="center">
              <Image
                src="/images/img_howto.png"
                alt="image"
                width="350px"
                height="628px"
              />
            </Flex>
            <Flex flex={1} flexDirection="column" position="relative">
              <Flex
                position="absolute"
                right="150px"
                left="0px"
                top="-150px"
                justify="flex-end"
                display={["none", "none", "none", "flex"]}
              >
                <Image
                  src="/images/ic_selling_point.png"
                  width="214px"
                  height="214px"
                  alt="ic"
                />
              </Flex>
              <Stack spacing={4} h="100%" justify="center" position="relative">
                <Stack
                  bg="#F6FFF1"
                  p="4"
                  direction="row"
                  spacing="4"
                  w="100%"
                  align="center"
                >
                  <Box>
                    <Image
                      src="/images/img_barcode.png"
                      width="114px"
                      height="114px"
                      alt="barcode"
                    />
                  </Box>
                  <Stack spacing="5">
                    <Text>Scan untuk Download</Text>
                    <Text fontSize={32}>IOS & Android</Text>
                  </Stack>
                </Stack>
                <Text fontSize={20} lineHeight="24px" textAlign="left">
                  Belanja kebutuhan Pokok dengan online, Download sekarang!
                </Text>

                <Stack direction="row" spacing="5">
                  <Box cursor="pointer">
                    <Image
                      src="/images/img_gplay.png"
                      alt="image"
                      width="135px"
                      height="50px"
                    />
                  </Box>
                  <Box cursor="pointer">
                    <Image
                      src="/images/img_appstore.png"
                      alt="image"
                      width="135px"
                      height="50px"
                    />
                  </Box>
                </Stack>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Content>
    </Box>
  );
}

export default Download;
