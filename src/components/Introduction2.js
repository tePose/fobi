import React, { Component } from 'react';

import BrokenText from './BrokenText';
import { text } from '../constants';

class Introduction2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            splitText: true,
        }
    }
    render() {
        const { splitText } = this.state;
        const { page } = this.props;
        const pageText = text[page.name];
        return (
            <div>
                <BrokenText
                    splitText={splitText}
                    text={pageText}
                    maxWidth={100}
                    fontSize={100}
                />
            </div>
        );
    }
}

export default Introduction2;