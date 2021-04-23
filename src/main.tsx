import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./app";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
