import { Radio as ChakraRadioButton, RadioProps as ChakraRadioButtonProps } from "@chakra-ui/react";

export type RadioButtonProps = Exclude<ChakraRadioButtonProps, "colorScheme" | "size" | "variant"> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  colorScheme?: "blue" | "green";
};
export const RadioButton = ({ children, ...props }: ChakraRadioButtonProps) => {
  return <ChakraRadioButton {...props}>{children}</ChakraRadioButton>;
};
