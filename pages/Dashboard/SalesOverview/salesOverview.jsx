import React from "react";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const SalesOverview = () => {
  return (
    <Box>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        maxWidth="100%"
        mt="2"
        px="6"
        py="2"
        borderTopRadius="10px"
        bg="white"
        boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Sales Overview
          </Text>
          <Text>Showing Overview Jan 2023 - Sep 2023</Text>
        </Box>
        <Box>
          <Text
            textColor="gray"
            // marginY="5"
            boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
            borderRadius="10px"
            p="4"
            mb="2"
            // mt="2"
          >
            View Transactions
          </Text>
          <Flex>
            <Text marginRight="4" mt="2">
              1 Week
            </Text>
            <Text marginRight="4" mt="2">
              1 Month
            </Text>
            <Text bg="#F5F5F5" px="4" py="2" borderRadius="10px">
              1 Year
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex
        justifyContent="space-between"
        maxWidth="100%"
        p="6"
        borderBottomRadius="10px"
        bg="white"
        boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
      >
        <Box>
          <Flex>
            <Box
              // maxWidth="100%"
              marginRight="6"
              py="2"
              pr="40"
              borderRadius="10px"
              pl="2"
              textColor="#3D3D3D"
            >
              <Box
  position="absolute"
  top="53%"
  left="5%"
  display="flex"
  alignItems="center" // Align items vertically in the center
>
  <FaArrowCircleLeft color="gray" size={20} />
  <Box
    ml="10px" // Add some left margin to the icon
    boxShadow="0 -5px 5px -5px rgba(0, 0, 0, 0.4)"
    mt="12px"
    ml="20px"
    fontWeight="bold"
    textColor="gray"
    display="flex"
    alignItems="center" // Align items vertically in the center
  >
    <Box mx="5px">Jan</Box> {/* Add margin on the left and right */}
    <Box mx="5px">Feb</Box>
    <Box mx="5px">Mar</Box>
    <Box mx="5px">Apr</Box>
    <Box mx="5px">May</Box>
    <Box mx="5px">Jun</Box>
    <Box mx="5px">Jul</Box>
    <Box mx="5px">Aug</Box>
    <Box mx="5px">Sep</Box>
  </Box>
</Box>

            </Box>
          </Flex>
        </Box>
        <Box
          boxShadow="-5px 0 5px -5px rgba(0, 0, 0, 0.4)"
          p={4}
          position="relative"
        >
          <Flex justifyContent="flex-end">
            <Box position="absolute" top="50%" left="5%">
              <FaArrowCircleRight size={20} />
            </Box>
            <Box
              maxWidth="40%"
              marginRight="6"
              py="2"
              pr="40"
              boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
              borderRadius="10px"
              pl="4"
              fontSize="xl"
              fontWeight="bold"
              textColor="#3D3D3D"
            >
              <Flex flexDirection="column">
                <Text
                  style={{
                    color: "blue",
                    fontSize: "x-large",
                    fontWeight: "bolder",
                  }}
                >
                  ₦0.00
                </Text>
                <Flex justify="space-between">
                  <Text marginRight="4">Balance</Text>
                  <Flex>
                    <FaArrowCircleUp size={20} color="gray" />
                    <Text marginLeft="2">0%</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Text
              maxWidth="40%"
              marginRight="6"
              py="2"
              pr="40"
              boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
              borderRadius="10px"
              pl="4"
              fontSize="xl"
              fontWeight="bold"
              textColor="#3D3D3D"
            >
              <Flex flexDirection="column">
                <Text
                  style={{
                    color: "#E4E4E4",
                    fontSize: "x-large",
                    fontWeight: "bolder",
                  }}
                >
                  ₦0.00
                </Text>
                <Flex justify="space-between">
                  <Text marginRight="4">Deposit</Text>
                  <Flex>
                    <FaArrowCircleUp size={20} color="gray" />
                    <Text marginLeft="2">0%</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Text>
          </Flex>
          <Flex marginTop="4" justifyContent="flex-end">
            <Text
              maxWidth="40%"
              marginRight="6"
              py="2"
              pr="40"
              boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
              borderRadius="10px"
              pl="4"
              fontSize="xl"
              fontWeight="bold"
              textColor="#3D3D3D"
            >
              <Flex flexDirection="column">
                <Box
                  style={{
                    color: "black",
                    fontSize: "x-large",
                    fontWeight: "bolder",
                  }}
                >
                  ₦0. <span style={{ color: "#CBCBCB" }}>00</span>
                </Box>
                <Flex justify="space-between">
                  <Text marginRight="4">Purchase</Text>
                  <Flex>
                    <FaArrowCircleUp size={20} color="gray" />
                    <Text marginLeft="2">0%</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Text>
            <Text
              maxWidth="40%"
              marginRight="6"
              py="2"
              pr="36"
              boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
              borderRadius="10px"
              pl="4"
              fontSize="xl"
              fontWeight="bold"
              textColor="#3D3D3D"
            >
              <Flex flexDirection="column">
                <Box
                  style={{
                    color: "black",
                    fontSize: "x-large",
                    fontWeight: "bolder",
                  }}
                >
                  ₦0. <span style={{ color: "#FF6A6A" }}>00</span>
                </Box>
                <Flex justify="space-between">
                  <Text marginRight="4"> Withdrawal</Text>
                  <Flex>
                    <FaArrowCircleUp size={20} color="gray" />
                    <Text marginLeft="2">0%</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SalesOverview;

