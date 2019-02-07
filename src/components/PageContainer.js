import React, { Component } from 'react';

import pages from '../constants/pages';
import { darkTheme } from '../styles/themes';

class PageContainer extends Component {
    state = { activePage: pages.INTRODUCTION_1 };

    next = page => {
        const { setTheme } = this.props;
        const nextPage = pages[page.next] ? pages[page.next] : pages.LAST
        this.setState({ activePage: nextPage });

        setTheme(nextPage.theme || darkTheme);
    }

    render() {
        const ActiveComponent = this.state.activePage.component;
        return (
            <React.Fragment>
                <ActiveComponent
                    page={this.state.activePage}
                    next={this.next}
                />
            </React.Fragment>
        );
    }
}

export default PageContainer;