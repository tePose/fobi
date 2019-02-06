import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { dark, red } from './styles/themes';
import PageContainer from './components/PageContainer';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        @import url("https://use.typekit.net/yvs0vfp.css");
    }

    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.white};
        overflow: hidden;
        font-family: paralucent, sans-serif;
        font-weight: 300;
    }

    *, *:berfore, *after {
        box-sizing: inherit;
    }
`;

class App extends Component {
    state = { theme: dark };

    setTheme = theme => this.setState({ theme: theme ? theme : dark });

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <React.Fragment>
                    <GlobalStyle />
                    <PageContainer setTheme={this.setTheme} />
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default App;
