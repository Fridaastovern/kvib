import { Box, Checkbox as ChakraCheckbox, CheckboxProps as ChakraCheckboxProps, forwardRef } from "@chakra-ui/react";

export type CheckboxProps = Exclude<
  ChakraCheckboxProps,
  "colorScheme" | "size" | "variant" | "leftIcon" | "rightIcon"
> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  colorScheme?: "green" | "blue";
  leftIcon?: "string";
  rightIcon?: "string";
};

export const Checkbox = forwardRef<CheckboxProps, "input">(
  (
    { children, size = "md", variant = "primary", colorScheme = "green", isDisabled, leftIcon, rightIcon, ...props },
    ref
  ) => {
    return (
      <ChakraCheckbox {...props} ref={ref} size={size} variant={variant} colorScheme={colorScheme} position="relative">
        Checkbox
      </ChakraCheckbox>
    );
  }
);
