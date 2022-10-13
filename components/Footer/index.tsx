import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Content from "components/Content";
import Link from "next/link";
import React, { useState } from "react";

function Footer() {
  const [menu] = useState([
    {
      id: "1",
      route: "/",
      name: "Beranda",
    },
    {
      id: "2",
      route: "/about-us",
      name: "Tentang Kami",
    },
    {
      id: "3",
      route: "/privacy-policy",
      name: "Privacy Policy",
    },
    {
      id: "4",
      route: "/tc",
      name: "Term & Condition",
    },
  ]);

  return (
    <Box>
      <Stack direction="column">
        <Box bg="#EFEFEF" py="5">
          <Content>
            <Box h="183px">
              <Flex
                height="90%"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box>
                  <Button bg="grey">Logo</Button>
                </Box>
                <Box>
                  <Stack direction="row" spacing="10px">
                    {Array(5)
                      .fill(5)
                      .map((item, idx) => (
                        <Box
                          key={idx}
                          bg="grey"
                          h="50px"
                          w="50px"
                          borderRadius={25}
                          ml="4"
                        />
                      ))}
                  </Stack>
                </Box>
              </Flex>
              <Container maxW="lg">
                <Flex flexDirection="row" justifyContent="space-evenly">
                  <Stack direction="row" spacing="5px">
                    {menu.map((item) => (
                      <Link href={item.route} key={item.id}>
                        <Text cursor="pointer">{item.name}</Text>
                      </Link>
                    ))}
                  </Stack>
                </Flex>
              </Container>
            </Box>
          </Content>
        </Box>
        <Flex
          h="72px"
          bg="#9E9E9E"
          mt="0px"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          2022. Jabulmart. All rights reserved
        </Flex>
      </Stack>
    </Box>
  );
}

export default Footer;
