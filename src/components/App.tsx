import "./../assets/scss/App.scss";
import * as React from "react";
import { hot } from "react-hot-loader";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const reactLogo = require("./../assets/img/react_logo.svg");

import PrimarySearchAppBar from "./PrimarySearchAppBar";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <PrimarySearchAppBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p>Seja bem vindo ao boilerplate React</p>
          <img src={reactLogo.default} height="480" />
          <div>
            <Button variant="contained" color="primary">
              Testando Material Ui
            </Button>
          </div>
        </Box>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
