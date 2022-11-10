import {
  Box,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Content from "components/Content";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Header() {
  const route = useRouter();

  console.log("route", route.pathname);
  const [selectedTab, setSelectedTab] = useState(route.pathname);

  const [menu] = useState([
    {
      id: "1",
      route: "/",
      name: "Beranda",
    },
    {
      id: "2",
      route: "/about-us",
      name: "Tentang JabulMart",
    },
    // {
    //   id: "3",
    //   route: "/privacy-policy",
    //   name: "Privacy Policy",
    // },
    // {
    //   id: "4",
    //   route: "/tc",
    //   name: "Term & Condition",
    // },
  ]);

  useEffect(() => {
    setSelectedTab(route.pathname);
  }, [route.pathname]);

  return (
    <Box bg="#E4FFD1">
      <Content>
        <Flex flexDirection="row" justifyContent="space-between">
          <Box>
            <Image src="/images/logo.png" width={95} height={44} alt="logo" />
          </Box>
          <Box>
            <HStack>
              {menu.map((item) => (
                <Box key={item.id}>
                  <Link href={item.route}>
                    <Text
                      cursor="pointer"
                      fontWeight="bold"
                      opacity={selectedTab === item.route ? 1 : 0.5}
                      color="#FFA000"
                    >
                      {item.name}
                    </Text>
                  </Link>
                </Box>
              ))}
            </HStack>
          </Box>
        </Flex>
      </Content>
    </Box>
  );
}

export default Header;
