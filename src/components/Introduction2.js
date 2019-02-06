import React, { Component } from 'react';

import Notification from './Notification';
import BrokenText from './BrokenText';
import { text } from '../constants';

class Introduction2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            splitText: true,
            notifications: [],
        }
    }

    close = id => {
        this.setState(state => ({
            notifications: [...state.notifications.slice(0, id), ...state.notifications.slice(id + 1)],
        }));
    }

    componentDidMount() {
        this.setState({
            notifications: [
                {top: 10, left: 20},
                {top: 30, left: 30},
            ]
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.notifications.length !== this.state.notifications.length) {
            const num = this.state.notifications.length > 0 ? `(${this.state.notifications.length})` : '';
            document.title = `${num} Fobier`.trim();
        }
    }

    render() {
        const { splitText, notifications } = this.state;
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
                {notifications.map((pos, i) => (
                    <Notification pos={pos} key={i} id={i} close={this.close} />
                ))}
            </div>
        );
    }
}

export default Introduction2;