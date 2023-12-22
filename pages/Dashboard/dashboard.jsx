

import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import SalesOverview from "./SalesOverview/salesOverview";
import PropertyOverview from "./SalesOverview/propertyOverview";
import ListingOverview from "./SalesOverview/listingOverview";

const Dashboard = () => {
  return (
    <Box marginX="10" marginY="5">
      <img src="/Frame6.svg" alt="Icon" />
      <Text>Welcome to your Dashboard</Text>
      <Flex justifyContent="space-between">
        <Box flex="3">
          <SalesOverview />
        </Box>
        <Box flex="1">
          <PropertyOverview />
        </Box>
      </Flex>

      <ListingOverview />
    </Box>
  );
};

export default Dashboard;
