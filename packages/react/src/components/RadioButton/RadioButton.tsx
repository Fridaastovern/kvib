import { forwardRef, Radio as ChakraRadioButton, RadioProps as ChakraRadioButtonProps } from "@chakra-ui/react";
// import {RadioButton as RadioButtonTheme} from "../../theme/components";

export type RadioButtonProps = Exclude<ChakraRadioButtonProps, "colorScheme" | "size" | "variant"> & {
  // variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green";
};
export const RadioButton = forwardRef<ChakraRadioButtonProps, "input">((props, ref) => {
  return <ChakraRadioButton ref={ref} {...props}></ChakraRadioButton>;
});
