
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Text, Flex, useTheme } from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MdClose } from "react-icons/md";

const localizer = momentLocalizer(moment);

const BigCalendarComponent = ({ setShowCalendar }) => {
  const theme = useTheme();

  const events = [
    {
      title: "Event 1",
      start: new Date(2023, 11, 1),
      end: new Date(2023, 11, 3),
    },
    {
      title: "Event 2",
      start: new Date(2023, 11, 7),
      end: new Date(2023, 11, 10),
    },
    // Add more events as needed
  ];

  const CustomToolbar = ({ label, onNavigate }) => {
    const closeCalendar = () => {
      setShowCalendar(false); // Close the calendar by setting setShowCalendar to false
    };

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
        marginBottom="10px" // Add margin at the bottom to separate the text from the calendar
      >
        <Flex
          justifyContent="space-between"
          w="100%"
          px={8}
          textColor="white"
          bg="black.200"
        >
          <Text marginBottom="10px" fontSize="2xl" fontWeight="bold">
            Calendar
          </Text>
          <Box>
            <MdClose size={30} cursor="pointer" onClick={closeCalendar} />{" "}
            {/* Call closeCalendar function on click */}
          </Box>
        </Flex>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textColor="white"
        >
          <button onClick={() => onNavigate("PREV")}>
            <MdKeyboardArrowLeft size={24} />
          </button>
          <div style={{ margin: "0 10px", fontSize: "1.5rem" }}>{label}</div>
          <button onClick={() => onNavigate("NEXT")}>
            <MdKeyboardArrowRight size={24} />
          </button>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      bg={theme.colors.black}
      color={theme.colors.gray[600]}
      height="90%"
      maxWidth="35%"
      p={4}
    >
      <Calendar
        // suppressHydrationWarning
        localizer={localizer}
        // events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ maxWidth: "100%" }}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default BigCalendarComponent;
