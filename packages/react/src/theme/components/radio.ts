import { defineStyleConfig } from "@chakra-ui/react";
// import {colors} from "../foundations";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    ".radio__ikon": {
      color: `${colorScheme}.700`,
      position: "relative",
      left: "-20px",
    },
    container: {
      _hover: {
        "input:enabled + .chakra-radio__control": {
          color: `${colorScheme}.700`,
        },
      },
    },
  }),
  sizes: {
    lg: {
      fontSize: "40px",
      backgroundColor: "yellow",
    },
  },
});

export default config;
