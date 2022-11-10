import { Box, Center, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Content from "components/Content";
import Image from "next/image";
import React, { useState } from "react";

function Mengapa() {
  const [whyList, setWhyList] = useState([
    {
      id: "1",
      image: "/images/ic_harga_murah.png",
      title: "Murah",
      description:
        "dapatkan harga barang-barang seperti pada pasar/toko kelontong terdekat",
    },
    {
      id: "2",
      image: "/images/ic_lengkap.png",
      title: "Lengkap",
      description: "dapatkan hampir semua kebutuhan sehari-harimu di sini",
    },
    {
      id: "3",
      image: "/images/ic_berkualitas.png",
      title: "Berkualitas",
      description:
        "dapatkan barang kebutuhan kamu sampai tempat tujuan tepat waktu dan segar",
    },
  ]);

  return (
    <Box>
      <Content>
        <Stack spacing={5} py="30px">
          <Center>
            <Stack direction="row" spacing="3">
              <Text fontSize={32} color="#FFA000" fontWeight="500">
                Mengapa berbelanja
              </Text>
              <Text fontSize={32} color="#76C043" fontWeight="500">
                di Jabulmart?
              </Text>
            </Stack>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {whyList.map((i) => (
              <Center key={i.id}>
                <Stack spacing={5}>
                  <Center>
                    <Box
                      h="250px"
                      w="250px"
                      bg="#FFFFFF"
                      borderRadius="10px"
                      boxShadow="rgba(0, 0, 0, 0.1) 10px 10px 30px 1px;"
                    >
                      <Image
                        src={i.image}
                        width="250px"
                        height="250px"
                        alt={i.title}
                      />
                    </Box>
                  </Center>
                  <Center>
                    <Text fontWeight="bold">{i.title}</Text>
                  </Center>
                  <Center>
                    <Text
                      textAlign="center"
                      fontSize={16}
                      lineHeight="24px"
                      color="#575757"
                    >
                      {i.description}
                    </Text>
                  </Center>
                </Stack>
              </Center>
            ))}
          </SimpleGrid>
        </Stack>
      </Content>
    </Box>
  );
}

export default Mengapa;
