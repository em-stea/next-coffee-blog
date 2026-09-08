import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box minH="100vh" w="full">
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
}

export default Layout;
