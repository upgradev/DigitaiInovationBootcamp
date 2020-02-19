import React from "react";
import {ThemeProvider} from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import * as S from "./styles";
import lightTheme from "./themes/light";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <S.Container>
        <S.Header >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </S.Header>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
