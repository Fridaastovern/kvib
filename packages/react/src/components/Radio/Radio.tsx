import { forwardRef, Radio as ChakraRadio, RadioProps as ChakraRadioProps } from "@chakra-ui/react";

export type RadioProps = Exclude<ChakraRadioProps, "colorScheme" | "size" | "variant"> & {
  // variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green";
};
export const Radio = forwardRef<ChakraRadioProps, "input">((props, ref) => {
  return <ChakraRadio ref={ref} {...props}></ChakraRadio>;
});
