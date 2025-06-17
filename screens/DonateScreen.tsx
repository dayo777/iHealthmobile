import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { Theme } from "@/src/constants/Colors";
import DonatePage from "@/submodules/DonateModules/src/components/donatepage";
const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function DonateScreen() {
  return (
    <Box flex={1}>
      <DonatePage />
    </Box>
  );
}
