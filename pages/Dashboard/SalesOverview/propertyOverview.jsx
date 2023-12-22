
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const PropertyOverview = () => {
  return (
    <>
      <Box
        maxWidth="100%"
        paddingY="20px"
        paddingRight="10px"
        marginLeft="4"
        marginTop="15px"
        borderRadius="10px"
        boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
      >
        <Flex align="center" justify="space-between">
          <Flex align="center" marginLeft="4">
            <MdHome size={40} color="blue" />
            <Text ml="2" fontSize="xl" fontWeight="bold">
              Property Overview
            </Text>
          </Flex>
          <Flex>
            <Text mr="2">View all</Text>
            <AiOutlineRight />
          </Flex>
        </Flex>

        <Box>
          <Flex align="center" justify="space-evenly" mt="6">
            <Box>
              <Flex
                px="6"
                flexDirection="column"
                py="2"
                borderRadius="10"
                // w="30%"
                boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
                fontSize="xl"
              >
                <Text fontSize="xl" fontWeight="bold" ml="4">
                  0
                </Text>
                <Text>Total</Text>
              </Flex>
            </Box>

            <Box>
              <Flex
                px="6"
                flexDirection="column"
                py="2"
                borderRadius="10"
                // w="30%"
                boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
                fontSize="xl"
              >
                <Text fontSize="xl" fontWeight="bold" ml="4">
                  0
                </Text>
                <Text>Available</Text>
              </Flex>
            </Box>

            <Box>
              <Flex
                px="6"
                flexDirection="column"
                py="2"
                borderRadius="10"
                // w="30%"
                boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
                fontSize="xl"
              >
                <Text fontSize="xl" fontWeight="bold" ml="4">
                  0
                </Text>
                <Text>Sold Out</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        maxWidth="100%"
        paddingY="20px"
        paddingRight="10px"
        marginLeft="4"
        marginTop="15px"
        borderRadius="10px"
        boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
      >
        <Flex align="center" justify="space-between">
          <Flex align="center" marginLeft="4">
            <FiUser size={40} color="blue" />
            <Text ml="2" fontSize="xl" fontWeight="bold">
              Customer Overview
            </Text>
          </Flex>
          <Flex>
            <Text mr="2">View all</Text>
            <AiOutlineRight />
          </Flex>
        </Flex>

        <Box>
          <Flex align="center" justify="space-evenly" mt="6">
            <Box>
              <Flex
                px="6"
                flexDirection="column"
                py="2"
                borderRadius="10"
                // w="30%"
                boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
                fontSize="xl"
              >
                <Text fontSize="xl" fontWeight="bold" ml="4">
                  0
                </Text>
                <Text>Total</Text>
              </Flex>
            </Box>

            <Box>
              <Flex
                px="6"
                flexDirection="column"
                py="2"
                borderRadius="10"
                // w="30%"
                boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
                fontSize="xl"
              >
                <Text fontSize="xl" fontWeight="bold" ml="4">
                  0
                </Text>
                <Text>New</Text>
              </Flex>
            </Box>
            <Box>
              <Flex
                px="6"
                flexDirection="column"
                py="2"
                borderRadius="10"
                // w="30%"
                boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
                fontSize="xl"
              >
                <Text fontSize="xl" fontWeight="bold" ml="4">
                  0
                </Text>
                <Text>Active</Text>
              </Flex>
            </Box>
            <Box>
              <Flex
                px="6"
                flexDirection="column"
                py="2"
                borderRadius="10"
                // w="30%"
                boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
                fontSize="xl"
              >
                <Text fontSize="xl" fontWeight="bold" ml="4">
                  0
                </Text>
                <Text>Inactive</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default PropertyOverview;
