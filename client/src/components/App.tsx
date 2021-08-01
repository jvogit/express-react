import { ChakraProvider, Stack, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes";

const App: React.FC<{}> = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Stack
          height="100vh"
          alignItems="center"
        >
          <Header
            maxW="6xl"
            margin="0 auto"
            width="100%"
          />
          <Routes />
        </Stack>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
