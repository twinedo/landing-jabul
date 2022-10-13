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

const Home: NextPage = () => {
  const url =
    "https://media.istockphoto.com/vectors/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-vector-id1324356458?k=20&m=1324356458&s=612x612&w=0&h=1cMwL98c061sqt4jX6nNeoXazoihFj82mXr6IX4HoaY=";

  const [faqList, setFaqList] = useState([
    {
      id: "1",
      title: "What is Jabulmart?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl enim sapien vitae ut elit placerat eget fusce. Id tellus a tincidunt sit tellus gravida. Elit risus eu, est convallis diam ultricies praesent. Fermentum id ut faucibus mus. At felis molestie placerat mattis rhoncus, ligula a. Eget vehicula ut rutrum suspendisse blandit. Non aliquam, fringilla habitasse mi non sed in sed dui. Viverra mattis sed nisl lacus, mauris vivamus. Id faucibus sit mattis vulputate ut. Venenatis, massa, blandit hendrerit leo. Sagittis, ac vitae, neque fermentum et integer. Amet, faucibus nunc in quis mi. Lorem suscipit ut sapien proin nec at molestie convallis. Sit elit feugiat quisque morbi pellentesque. At nibh nunc, dignissim orci arcu. Dignissim sed proin vitae sed. Enim et cursus quam enim nam sit mi. Et tempus felis tristique fermentum commodo. Fames vitae scelerisque scelerisque sed. Ultrices ipsum odio vitae odio dolor dignissim venenatis. Urna blandit interdum id dictum donec purus integer. Sagittis ac amet donec sit.",
      isOpen: false,
    },
    {
      id: "2",
      title: "What is Jabulmart?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl enim sapien vitae ut elit placerat eget fusce. Id tellus a tincidunt sit tellus gravida. Elit risus eu, est convallis diam ultricies praesent. Fermentum id ut faucibus mus. At felis molestie placerat mattis rhoncus, ligula a. Eget vehicula ut rutrum suspendisse blandit. Non aliquam, fringilla habitasse mi non sed in sed dui. Viverra mattis sed nisl lacus, mauris vivamus. Id faucibus sit mattis vulputate ut. Venenatis, massa, blandit hendrerit leo. Sagittis, ac vitae, neque fermentum et integer. Amet, faucibus nunc in quis mi. Lorem suscipit ut sapien proin nec at molestie convallis. Sit elit feugiat quisque morbi pellentesque. At nibh nunc, dignissim orci arcu. Dignissim sed proin vitae sed. Enim et cursus quam enim nam sit mi. Et tempus felis tristique fermentum commodo. Fames vitae scelerisque scelerisque sed. Ultrices ipsum odio vitae odio dolor dignissim venenatis. Urna blandit interdum id dictum donec purus integer. Sagittis ac amet donec sit.",
      isOpen: false,
    },
    {
      id: "3",
      title: "What is Jabulmart?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl enim sapien vitae ut elit placerat eget fusce. Id tellus a tincidunt sit tellus gravida. Elit risus eu, est convallis diam ultricies praesent. Fermentum id ut faucibus mus. At felis molestie placerat mattis rhoncus, ligula a. Eget vehicula ut rutrum suspendisse blandit. Non aliquam, fringilla habitasse mi non sed in sed dui. Viverra mattis sed nisl lacus, mauris vivamus. Id faucibus sit mattis vulputate ut. Venenatis, massa, blandit hendrerit leo. Sagittis, ac vitae, neque fermentum et integer. Amet, faucibus nunc in quis mi. Lorem suscipit ut sapien proin nec at molestie convallis. Sit elit feugiat quisque morbi pellentesque. At nibh nunc, dignissim orci arcu. Dignissim sed proin vitae sed. Enim et cursus quam enim nam sit mi. Et tempus felis tristique fermentum commodo. Fames vitae scelerisque scelerisque sed. Ultrices ipsum odio vitae odio dolor dignissim venenatis. Urna blandit interdum id dictum donec purus integer. Sagittis ac amet donec sit.",
      isOpen: false,
    },
    {
      id: "4",
      title: "What is Jabulmart?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl enim sapien vitae ut elit placerat eget fusce. Id tellus a tincidunt sit tellus gravida. Elit risus eu, est convallis diam ultricies praesent. Fermentum id ut faucibus mus. At felis molestie placerat mattis rhoncus, ligula a. Eget vehicula ut rutrum suspendisse blandit. Non aliquam, fringilla habitasse mi non sed in sed dui. Viverra mattis sed nisl lacus, mauris vivamus. Id faucibus sit mattis vulputate ut. Venenatis, massa, blandit hendrerit leo. Sagittis, ac vitae, neque fermentum et integer. Amet, faucibus nunc in quis mi. Lorem suscipit ut sapien proin nec at molestie convallis. Sit elit feugiat quisque morbi pellentesque. At nibh nunc, dignissim orci arcu. Dignissim sed proin vitae sed. Enim et cursus quam enim nam sit mi. Et tempus felis tristique fermentum commodo. Fames vitae scelerisque scelerisque sed. Ultrices ipsum odio vitae odio dolor dignissim venenatis. Urna blandit interdum id dictum donec purus integer. Sagittis ac amet donec sit.",
      isOpen: false,
    },
    {
      id: "5",
      title: "What is Jabulmart?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl enim sapien vitae ut elit placerat eget fusce. Id tellus a tincidunt sit tellus gravida. Elit risus eu, est convallis diam ultricies praesent. Fermentum id ut faucibus mus. At felis molestie placerat mattis rhoncus, ligula a. Eget vehicula ut rutrum suspendisse blandit. Non aliquam, fringilla habitasse mi non sed in sed dui. Viverra mattis sed nisl lacus, mauris vivamus. Id faucibus sit mattis vulputate ut. Venenatis, massa, blandit hendrerit leo. Sagittis, ac vitae, neque fermentum et integer. Amet, faucibus nunc in quis mi. Lorem suscipit ut sapien proin nec at molestie convallis. Sit elit feugiat quisque morbi pellentesque. At nibh nunc, dignissim orci arcu. Dignissim sed proin vitae sed. Enim et cursus quam enim nam sit mi. Et tempus felis tristique fermentum commodo. Fames vitae scelerisque scelerisque sed. Ultrices ipsum odio vitae odio dolor dignissim venenatis. Urna blandit interdum id dictum donec purus integer. Sagittis ac amet donec sit.",
      isOpen: false,
    },
  ]);

  const _onClickFaqItem = (index: number) => {
    const faq = [...faqList];
    faq[index].isOpen = !faq[index].isOpen;
    setFaqList(faq);
  };

  return (
    <Box>
      <Content>
        <Header />
      </Content>

      {/* Section 1 */}
      <Box bg="#F8F7F7">
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
                  <Text fontSize={32} lineHeight="72px">
                    Groceries delivered in minutes
                  </Text>
                  <Text lineHeight="24px">
                    Jabulmart adalah portal layanan belanja kebutuhan rumah
                    online untukmu. Ucapkan selamat tinggal ke antrian panjang,
                    toko yang padat, & kemacetan!
                    <br />
                    <br /> Tambahkan sayuran segar, perlengkapan rumah tangga,
                    dan lainnya ke troli dan pesananmu bisa dikirimkan di hari
                    yang sama.
                  </Text>
                  <Button
                    bg="#696969"
                    w="30%"
                    color="#fff"
                    cursor="pointer"
                    _hover={{ bg: "#696969", color: "black" }}
                  >
                    <Text>Get Started</Text>
                  </Button>
                </Stack>
              </Flex>
              <Flex
                flex={1}
                borderWidth={1}
                borderColor="black"
                justifyContent="center"
              >
                <Image src={url} alt="image" width="100px" height="100px" />
              </Flex>
            </Flex>
          </Box>
        </Content>
      </Box>
      {/* Section 1 */}

      {/* Section 2 */}
      <Box>
        <Content>
          <Stack spacing={5} py="30px">
            <Center>
              <Text fontSize={32}>Mengapa berbelanja di Jabulmart?</Text>
            </Center>
            <SimpleGrid columns={[1, 2, 3]} spacing="40px">
              {Array(3)
                .fill(3)
                .map((i, idx) => (
                  <Center key={idx}>
                    <Stack spacing={4}>
                      <Center>
                        <Box h="250px" w="250px" bg="#EBEBEB" />
                      </Center>
                      <Center>
                        <Text fontWeight="bold">
                          Harga dan Kualitas terbaik
                        </Text>
                      </Center>
                      <Center>
                        <Text textAlign="center" fontSize={12}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Felis lectus laoreet eu ullamcorper viverra
                          vulputate et vitae egestas.{" "}
                        </Text>
                      </Center>
                    </Stack>
                  </Center>
                ))}
            </SimpleGrid>
          </Stack>
        </Content>
      </Box>
      {/* Section 2 */}

      {/* Section 3 */}
      <Box bg="#F8F7F7">
        <Box h="360px">
          <Flex
            flex={1}
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={url} alt="image" width="100px" height="100px" />
          </Flex>
        </Box>
      </Box>
      {/* Section 3*/}

      {/* Section 4 */}
      <Box>
        <Box h="360px">
          <Stack spacing="5">
            <Content>
              <Box mt="10">
                <Text fontSize="24px">Promo Jabulmart</Text>
              </Box>
            </Content>
            <SimpleGrid columns={3} spacing={3}>
              {Array(3)
                .fill(3)
                .map((item, idx) => (
                  <Box
                    key={idx}
                    width="100%"
                    height="200px"
                    bg="#DEDCDC"
                    borderRadius={10}
                  />
                ))}
            </SimpleGrid>
          </Stack>
        </Box>
      </Box>
      {/* Section 4*/}

      {/* Section 5 */}
      <Box bg="#D9D9D9">
        <Content>
          <Box h="480px">
            <Flex
              flexDirection="row"
              h="100%"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Flex flex={1} justifyContent="center">
                <Image
                  src="/images/smartphone.png"
                  alt="image"
                  width="350px"
                  height="300px"
                />
              </Flex>
              <Flex flex={1} flexDirection="column">
                <Stack spacing={4}>
                  <Text fontSize={32} lineHeight="72px">
                    Download Jabulmart sekarang!
                  </Text>
                  <Button
                    bg="#3A403F"
                    color="white"
                    w="50%"
                    _hover={{ color: "white" }}
                  >
                    Daftar Sekarang
                  </Button>
                  <Text>Unduh Aplikasi Mobile Sekarang</Text>
                  <Stack direction="row">
                    <Box cursor="pointer">
                      <Image
                        src="/images/gplay.png"
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
      {/* Section 5 */}

      {/* Section 6 */}
      <Box>
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
                  <Text fontSize={32} lineHeight="72px">
                    Area Layanan Jabulmart
                  </Text>
                  <Text lineHeight="24px">
                    Temukan kota tempat kami mengirimkan bahan makanan Anda dan
                    makanan siap saji, dalam hitungan menit dan dengan harga
                    supermarket.
                  </Text>
                  <Button
                    bg="#696969"
                    w="30%"
                    color="#fff"
                    cursor="pointer"
                    _hover={{ bg: "#696969", color: "black" }}
                  >
                    <Text>Belanja Sekarang</Text>
                  </Button>
                </Stack>
              </Flex>
              <Flex flex={1} justifyContent="center">
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
      {/* Section 6 */}

      {/* Section 7 */}
      <Box bg="#F8F7F7">
        <Content>
          <Stack spacing={5} py="30px">
            <Center>
              <Text fontSize={32}>Frequently Asked Questions</Text>
            </Center>
            <Center>
              <Text>
                Ada pertanyaan, kami punya jawabannya! Cari tahu lebih banyak
                tentang Jabulmart
              </Text>
            </Center>
            {faqList.map((item, idx) => (
              <Box
                key={item.id}
                bg="#EBEBEB"
                onClick={() => _onClickFaqItem(idx)}
              >
                <Stack spacing={5} p="5">
                  <Flex flexDirection="row" justifyContent="space-between">
                    <Text fontWeight="bold">{item.title}</Text>
                    {item.isOpen ? (
                      <VscTriangleDown
                        size={24}
                        color="#555555"
                        cursor="pointer"
                      />
                    ) : (
                      <VscTriangleUp
                        size={24}
                        color="#555555"
                        cursor="pointer"
                      />
                    )}
                  </Flex>
                  {item.isOpen && (
                    <Box
                      transition="opacity 1s ease-in-out"
                      visibility={!item.isOpen ? "hidden" : "visible"}
                    >
                      {item.description}
                    </Box>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Content>
      </Box>
      {/* Section 7 */}

      <Footer />
    </Box>
  );
};

export default Home;
