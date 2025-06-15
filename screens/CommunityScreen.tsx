import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/src/constants/Colors";
// import { Theme } from "../src/theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function CommunityScreen() {
  return (
    <Box flex={1} backgroundColor="black" padding="md">
      <Text variant="header" color="primary" marginBottom="sl">
        Community
      </Text>
      <Text variant="body" color="primary">
        Connect with our hospital community.
      </Text>
    </Box>
  );
}
