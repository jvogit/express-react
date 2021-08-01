import { ChakraProvider, Container, theme } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes";

const App: React.FC<{}> = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header
          maxW="1200px"
          margin="0 auto"
        />
        <Container
          maxW="1200px"
          centerContent
        >
          <Routes />
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
