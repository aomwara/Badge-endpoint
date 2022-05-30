import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import "@fontsource/inter/400.css";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
