
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ListingOverview = () => {
  return (
    <Box maxWidth="100%" mt={4}>
      <Flex justifyContent="space-between">
        <Box
          maxWidth="35%"
          boxShadow="1px 1px 2px 2px rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          flexGrow={1}
          // mt={2}
        >
          <Box p={4} mt={2}>
            <Text ml="2" fontSize="xl" fontWeight="bold">
              Listening Overview
            </Text>
            <Flex justifyContent="space-between" mt={4}>
              <Box>
                <Text marginRight="auto" marginBottom={2}>
                  Most View
                </Text>
                <Flex align="center">
                  <Box
                    border="1px"
                    borderColor="#12D8A0"
                    borderRadius="10px"
                    overflow="hidden"
                    bg="gray.200"
                    p={2}
                    marginRight={2}
                  >
                    <FaImage size={40} color="gray" />
                  </Box>
                  <Text fontSize="xl" fontWeight="bold">
                    None
                  </Text>
                </Flex>
              </Box>
              <Box mr={20} mb="4">
                <Text marginBottom={2}>Most Shared</Text>
                <Flex align="center">
                  <Box
                    border="1px"
                    borderColor="blue"
                    borderRadius="10px"
                    overflow="hidden"
                    bg="gray.200"
                    p={2}
                    marginRight={2}
                  >
                    <FaImage size={40} color="gray" />
                  </Box>
                  <Text fontSize="xl" fontWeight="bold">
                    None
                  </Text>
                </Flex>
              </Box>
            </Flex>

            <Flex
              justifyContent="space-between"
              mt={2}
              bg="#F5F5F5"
              px={2}
              py={4}
              borderRadius={10}
            >
              <Box>
                <Text marginRight="auto" marginBottom={2}>
                  Most Watchlist
                </Text>
                <Flex align="center">
                  <Box
                    borderColor="yellow"
                    borderRadius="10px"
                    bg="gray.200"
                    p={2}
                    marginRight={2}
                    border="1px"
                  >
                    <FaImage size={40} color="gray" />
                  </Box>
                  <Text fontSize="xl" fontWeight="bold">
                    None
                  </Text>
                </Flex>
              </Box>
              <Box
                border="1px"
                bg="white"
                px="4"
                py="2"
                borderRadius="10"
                borderColor="gray.200"
              >
                <Text fontSize="xl" fontWeight="bold">
                  0
                </Text>
                <Flex align="center">
                  <Box>
                    <Text p="2px">Number of watchlists</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          mx={4}
          maxWidth="35%"
          boxShadow="1px 1px 2px 2px rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          flexGrow={1}
          position="relative"
          // mt={2}
        >
          <Box p={4} mt={2}>
            <Flex justifyContent="space-between">
              <Box ml="2" fontSize="4xl" fontWeight="bold">
                ₦ 0 <span style={{ color: "gray" }}>.00</span>
              </Box>
              <Box>
                <Flex>
                  <Text mr="2">View all</Text>
                  <AiOutlineRight />
                </Flex>
              </Box>
            </Flex>

            <Text>Total Outstanding Ballance</Text>
            <Flex justifyContent="space-between" mt={4}></Flex>

            <Flex justifyContent="space-between" mt={2} px={2} py={4}>
              <Box>
                <Flex align="center">
                  <Box
                    borderColor="#FF9103"
                    borderRadius="10px"
                    overflow="hidden"
                    bg="gray.200"
                    p={4}
                    marginRight={2}
                  >
                    <FaImage size={80} color="gray" />
                  </Box>

                  <Flex flexDirection="column">
                    <Text fontSize="xl" fontWeight="bold" mb="4">
                      None
                    </Text>
                    <Box>
                      <Text
                        ml="2"
                        fontSize="xl"
                        fontWeight="bold"
                        textColor="red"
                      >
                        ₦ 0.00
                      </Text>
                      <Text>Outstanding Ballance</Text>
                    </Box>

                    <Box
                      position="absolute"
                      left=""
                      right="10%"
                      top=""
                      bottom="10%"
                    >
                      <Flex>
                        <Text fontSize="xl" mr="2">
                          1/5
                        </Text>

                        <Box mr="2" mt="2">
                          <FaArrowCircleLeft size="20" color="gray" />
                        </Box>
                        <Box mr="2" mt="2">
                          <FaArrowCircleRight size="20" />
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          mx={4}
          maxWidth="35%"
          boxShadow="1px 1px 2px 2px rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          flexGrow={1}
          position="relative"
          // mt={2}
        >
          <Box p={4} mt={2}>
            <Text fontSize="xl" textColor="gray" mb="2" fontWeight="bold">
              Top Selling
            </Text>
            <Flex justifyContent="space-between">
              <Box ml="2" fontSize="4xl" fontWeight="bold">
                ₦ 0 <span style={{ color: "gray" }}>.00</span>
              </Box>
              <Box></Box>
            </Flex>

            <Text>Total Sold</Text>
            <Flex justifyContent="space-between" mt={4}></Flex>

            <Flex justifyContent="space-between" mt={2} px={2} py={4}>
              <Box>
                <Flex align="center">
                  <Box
                    borderColor="#FF9103"
                    borderRadius="10px"
                    overflow="hidden"
                    bg="gray.200"
                    p={4}
                    marginRight={2}
                  >
                    <FaImage size={80} color="gray" />
                  </Box>

                  <Flex flexDirection="column">
                    <Text fontSize="xl" fontWeight="bold" mb="4">
                      None
                    </Text>
                    <Box>
                      <Text
                        mt="2"
                        fontSize="xl"
                        fontWeight="bold"
                        textColor="gray"
                      >
                        {" "}
                        0
                      </Text>
                      <Text>Whole Unit Sold</Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ListingOverview;
