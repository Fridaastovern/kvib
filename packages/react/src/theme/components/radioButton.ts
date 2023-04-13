import { defineStyleConfig } from "@chakra-ui/react";
// import {colors} from "../foundations";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    color: `${colorScheme}.500`,
    // cursor: "pointer",
    backgroundColor: `${colorScheme}.500`,
    _hover: {
      color: `${colorScheme}.400`,
    },
  }),
});

export default config;
