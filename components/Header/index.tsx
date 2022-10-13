import {
  Box,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
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

  useEffect(() => {
    setSelectedTab(route.pathname);
  }, [route.pathname]);

  return (
    <Box py="10">
      <Flex flexDirection="row" justifyContent="space-between">
        <Box>
          <Text fontWeight="bold">Jabulmart</Text>
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
                  >
                    {item.name}
                  </Text>
                </Link>
              </Box>
            ))}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
