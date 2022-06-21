import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

// Import Swiper styles
import "../styles/slider.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
