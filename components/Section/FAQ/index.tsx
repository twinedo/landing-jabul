import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Content from "components/Content";
import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

function FAQ() {
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
    <Box
      bg="#F8F7F7"
      bgImage="url('/images/bg_faq.png')"
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      <Content>
        <Stack spacing={5} py="30px">
          <Center>
            <Stack direction="row">
              <Text
                fontSize={40}
                color="#FFA000"
                fontWeight="500"
                lineHeight="60px"
              >
                Frequently Asked{" "}
              </Text>
              <Text
                fontSize={40}
                color="#53B175"
                fontWeight="500"
                lineHeight="60px"
              >
                Questions
              </Text>
            </Stack>
          </Center>
          <Center>
            <Text
              color="#717171"
              fontWeight="500"
              fontSize="22px"
              lineHeight="33px"
            >
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
              <Stack spacing={5} p="5" bg="#E4FFD1">
                <Flex flexDirection="row" justifyContent="space-between">
                  <Text fontWeight="bold" color="#53B175">
                    {item.title}
                  </Text>
                  {item.isOpen ? (
                    <VscTriangleDown
                      size={24}
                      color="#53B175"
                      cursor="pointer"
                    />
                  ) : (
                    <VscTriangleUp size={24} color="#53B175" cursor="pointer" />
                  )}
                </Flex>
                {item.isOpen && (
                  <Box
                    transition="opacity 1s ease-in-out"
                    visibility={!item.isOpen ? "hidden" : "visible"}
                    color="#F6873E"
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
  );
}

export default FAQ;
