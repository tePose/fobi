import React, { Component } from 'react';

import pages from '../constants/pages';
import { dark } from '../styles/themes';

class PageContainer extends Component {
    state = { activePage: pages.INTRODUCTION };

    next = page => {
        const { setTheme } = this.props;
        this.setState({ activePage: page ? pages[page.next] : pages.LAST });
        setTheme(pages[page.next].theme || dark);
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