import { defineStyleConfig } from "@chakra-ui/react";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    container: {
      ".chakra-radio__control": {
        width: "16px",
        height: "1rem",
        // ^hvis jeg setter begge disse til 1rem blir stylingen ødelagt. Rart^
        color: `${colorScheme}.500`,
        borderColor: `${colorScheme}.500`,
        backgroundColor: "white",
        _before: {
          height: "0.5rem",
          width: "0.5rem",
        },
        _hover: {
          backgroundColor: "white",
        },
      },
      _hover: {
        ".chakra-radio__control": {
          borderColor: `${colorScheme}.400`,
          color: `${colorScheme}.400`,
        },
      },
    },
    control: {
      color: `${colorScheme}.400`,
      backgroundColor: "white",
    },
  }),
});

export default config;
