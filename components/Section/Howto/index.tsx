import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Content from "components/Content";
import Image from "next/image";
import React, { useState } from "react";

function Howto() {
  const [stepHow, setStepHow] = useState([
    {
      id: "1",
      text: "Download Jabulmart di Playstore",
    },
    {
      id: "2",
      text: "Daftarkan dengan Email mu",
    },
    {
      id: "3",
      text: "Pilih barang yang kamu suka",
    },
    {
      id: "4",
      text: "Pilih lokasi tempat mu sekarang",
    },
    {
      id: "5",
      text: "Horeee..!! Belanjaan mu telah sampai",
    },
  ]);

  return (
    <Box>
      <Content>
        <Flex flexDirection="row">
          <Flex flex={2}>
            <Stack spacing="5">
              <Text
                color="#92E25A"
                fontWeight="900"
                fontSize="32px"
                lineHeight="60px"
              >
                Cara Berbelanja di Jabulmart
              </Text>
              <Text
                color="#858585"
                fontWeight="400"
                fontSize="24px"
                lineHeight="38px"
              >
                Nikmati cara praktis serta mudahnya berbelanja di Jabulmart
              </Text>
              {stepHow.map((step, idx) => (
                <Box
                  key={step.id}
                  border="1px solid rgba(150, 150, 150, 0.37)"
                  color="#636363"
                  borderRadius="12PX"
                  py="16px"
                  px="30px"
                  cursor="pointer"
                  _hover={{
                    color: "#F6873E",
                    border: "1px solid #53B175",
                  }}
                >
                  <Text>
                    {idx + 1}. {step.text}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              src="/images/img_howto.png"
              width={337}
              height={628}
              alt="howto.png"
            />
          </Flex>
        </Flex>
      </Content>
    </Box>
  );
}

export default Howto;
