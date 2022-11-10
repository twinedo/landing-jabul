import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Content from "components/Content";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function AreaLayanan() {
  return (
    <Box bg="#76C043">
      <Content>
        <Box h="480px">
          <Flex
            flexDirection="row"
            h="100%"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Flex flex={1} flexDirection="column" alignItems="flex-start">
              <Stack spacing={5}>
                <Text
                  fontSize={32}
                  lineHeight="72px"
                  color="white"
                  fontWeight="bold"
                >
                  Area Layanan Jabulmart
                </Text>
                <Text lineHeight="24px" color="white">
                  Temukan kota tempat kami mengirimkan bahan makanan Anda dan
                  makanan siap saji, dalam hitungan menit dan dengan harga
                  supermarket.
                </Text>
                <Box>
                  <Button
                    bg="#E4FFD1"
                    color="#FFA000"
                    cursor="pointer"
                    _hover={{ bg: "#E4FFD1", color: "#FFA000" }}
                  >
                    <Stack direction="row" spacing="3" align="center">
                      <Text>Belanja Sekarang</Text>
                      <FaLongArrowAltRight />
                    </Stack>
                  </Button>
                </Box>
              </Stack>
            </Flex>
            <Flex
              flex={1}
              justifyContent="center"
              bgImage="url('/images/bg_area.png')"
              bgSize="cover"
              bgRepeat="no-repeat"
            >
              <Image
                src="/images/map.png"
                alt="image"
                width="300px"
                height="300px"
              />
            </Flex>
          </Flex>
        </Box>
      </Content>
    </Box>
  );
}

export default AreaLayanan;
