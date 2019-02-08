import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// eslint-disable-next-line
import { darkTheme, redTheme, whiteTheme } from './styles/themes';
import PageContainer from './components/PageContainer';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        min-height: 100%;
        min-width: 100%;
        @import url("https://use.typekit.net/yvs0vfp.css");
    }

    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        min-width: 100vw;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.color};
        overflow: hidden;
        font-family: paralucent, sans-serif;
        font-weight: 300;
    }

    *, *:berfore, *after {
        box-sizing: inherit;
    }
`;

class App extends Component {
    state = { theme: darkTheme };

    setTheme = theme => this.setState({ theme: theme ? theme : darkTheme });

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
