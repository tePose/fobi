import React, { Component } from 'react';

import Introduction from './Introduction';
import { pages } from '../constants';

class PageContainer extends Component {
    state = {
        currentPage: pages.INTRODUCTION,
    }

    next = page => {

    }

    completed = page => {
        console.log(page)
    }

    render() {
        return (
            <React.Fragment>
                <Introduction page={pages.INTRODUCTION} completed={this.completed} />
            </React.Fragment>
        );
    }
}

export default PageContainer;