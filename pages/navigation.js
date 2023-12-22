
import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
const Navigation = () => {
  return (
    <Box
      maxWidth="100%"
      bg="white"
      boxShadow="0 2px 4px 0 rgba(0,0,0,0.2)"
      //   marginX="auto"
      paddingX="20px"
      height="100px"
      marginBottom="1"
    >
      <Flex alignItems="center" p={4}>
        <Flex flex="1" borderRadius="10px" bg="#F5F5F5" p="3" mr="8">
          <MdHome size={35} />
          <Text mr={10} ml={2} fontSize="2xl" fontWeight="bold">
            Dashboard
          </Text>
        </Flex>

        <Flex flex="1">
          <FiMapPin size={30} />
          <Text mr={10} ml={2} fontSize="xl">
            Listings
          </Text>
        </Flex>

        <Flex flex="1">
          <FiUser size={30} />
          <Text mr={10} ml={2} fontSize="xl">
            Users
          </Text>
        </Flex>

        <Flex flex="1">
          <FiCreditCard size={30} />
          <Text mr={10} ml={4} fontSize="xl">
            Accounts
          </Text>
        </Flex>

        <Flex flex="1">
          <FiCalendar size={30} />
          <Text mr={10} ml={4} fontSize="xl">
            Request
          </Text>
        </Flex>

        <Flex flex="1">
          <FiSettings size={30} />
          <Text mr={10} ml={4} fontSize="xl">
            Settings
          </Text>
        </Flex>

        <Flex flex="2" alignItems="center">
          <InputGroup position="relative">
            <Input
              placeholder="Search..."
              borderRadius="15px"
              bg="#F5F5F5"
              padding="6"
            />
            <InputRightElement
              position="absolute"
              right="8px"
              top="50%"
              transform="translateY(-50%)"
            >
              <IoMdSearch size={50} />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
