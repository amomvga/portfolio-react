import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
// import { HeaderDrawerProvider } from "../contexts/HeaderDrawerContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <HeaderDrawerProvider> */}
        <Component {...pageProps} />
      {/* </HeaderDrawerProvider> */}
    </ChakraProvider>
  );
}

export default MyApp;
