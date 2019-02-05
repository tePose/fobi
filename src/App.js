import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }

    *, *:berfore, *after {
        box-sizing: inherit;
    }
`;

const StyledApp = styled.div`

`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        La oss snakke om fobier
      </div>
    );
  }
}

export default App;
