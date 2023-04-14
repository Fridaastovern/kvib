import { defineStyleConfig } from "@chakra-ui/react";
// import {colors} from "../foundations";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    control: {
      color: "blue",
      backgroundColor: "white",
      _hover: {
        color: `${colorScheme}.700`,
      },
      _focus: {},
    },
  }),
});

export default config;
