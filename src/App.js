import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import PageContainer from './components/PageContainer';

const dark = {
    red: '#B62C00',
    black: '#141414',
    white: '#F5F5F5',
    background: '#141414',
}

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.black};
        color: ${props => props.theme.white};
        overflow: hidden;
    }

    *, *:berfore, *after {
        box-sizing: inherit;
    }
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={dark}>
                < >
                    <GlobalStyle />
                    <PageContainer />
                </>
            </ThemeProvider>
        );
    }
}

export default App;
