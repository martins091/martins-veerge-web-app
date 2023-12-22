"use client"

import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
// import CalendarComponent from './calendar';
import BigCalendarComponent from "./calendar";

const Header = () => {
  const [showCalendar, setShowCalendar] = useState(false); // Define showCalendar state using useState

  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState); // Toggle showCalendar state
  };

  return (
    <Box bg="black" color="white">
      <Flex justify="space-between" align="center" maxWidth="100%" marginX="10">
        <Box>
          <Text fontSize="4xl" fontWeight="bold">
            Veerge
          </Text>
          <Text fontSize="2xl">For Mainstone</Text>
        </Box>
        <Flex align="center">
          <Box marginRight="20px">
            <MdAddBox size={35} />
          </Box>
          <Box marginRight="20px">
            <FaCalendarAlt
              size={30}
              onClick={toggleCalendar}
              cursor="pointer"
            />
          </Box>
          <Box marginRight="20px">
            <FaBell size={30} />
          </Box>
          <Box marginRight="20px">
            <FaUserCircle size={50} />
          </Box>
          <Text fontSize="2xl">Ahmed Ali</Text>
        </Flex>
        {showCalendar && (
          <Box
            position="absolute"
            top="8%"
            left="75%"
            right="-50%"
            bottom={0}
            zIndex={10}
          >
            <BigCalendarComponent setShowCalendar={setShowCalendar} />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
