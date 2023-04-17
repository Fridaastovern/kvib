import { defineStyleConfig } from "@chakra-ui/react";
// import {colors} from "../foundations";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    container: {
      _hover: {
        "input:enabled + .chakra-radio__control": {
          backgroundColor: "white",
          borderColor: `${colorScheme}.700`,
        },
        "input:enabled:checked + .chakra-radio__control": {
          color: "darkTeal",
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
