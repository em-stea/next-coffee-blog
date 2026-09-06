import { useBreakpointValue as cUseBreakpoint } from "@chakra-ui/react";

const useBreakpoint = () => {
  const currentBreakpoint = cUseBreakpoint({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const breakpoints = ["base", "sm", "md", "lg", "xl", "2xl"];

  const breakpointIndex = breakpoints.indexOf(currentBreakpoint as string);

  const isLargerThanBase = breakpointIndex >= 0;
  const isLargerThanSM = breakpointIndex >= 1;
  const isLargerThanMD = breakpointIndex >= 2;
  const isLargerThanLG = breakpointIndex >= 3;
  const isLargerThanXL = breakpointIndex >= 4;
  const isLargerThan2XL = breakpointIndex >= 5;

  return {
    isLargerThanBase,
    isLargerThanSM,
    isLargerThanMD,
    isLargerThanLG,
    isLargerThanXL,
    isLargerThan2XL,
  };
};

export default useBreakpoint;
