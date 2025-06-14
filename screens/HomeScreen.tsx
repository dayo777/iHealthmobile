import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/src/constants/Colors";
// import { Theme } from "../src/theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function HomeScreen() {
  return (
    <Box flex={1} backgroundColor="black" padding="md">
      <Text variant="header" color="primary" marginBottom="sl">
        Welcome to Hospital App
      </Text>
      <Text variant="body" color="primary">
        This is the home screen of your hospital application.
      </Text>
    </Box>
  );
}
