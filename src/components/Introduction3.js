import React, { Component } from 'react';

import Notification from './Notification';
import BrokenText from './BrokenText';
import { text } from '../constants';
import { PulsatingCircle, grow, pulse } from '../styles/objects';

class Introduction3 extends Component {
    constructor(props) {
        super(props);
        this.circleRef = React.createRef();
        this.state = {
            splitText: true,
            notifications: [],
            clicked: false,
        }
    }

    close = id => {
        this.setState(state => ({
            notifications: [...state.notifications.slice(0, id), ...state.notifications.slice(id + 1)],
        }));
    }

    componentDidMount() {
        const { next, page } = this.props;

        this.setState({ notifications: [{ bottom: 15, right: 25 }] });

        this.circleRef.current.addEventListener("animationend", () => {
            if (this.state.clicked) next(page);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.notifications.length !== this.state.notifications.length) {
            const num = this.state.notifications.length > 0 ? `(${this.state.notifications.length})` : '';
            document.title = `${num} Fobier`.trim();
        }
    }

    render() {
        const { splitText, notifications, clicked } = this.state;
        const { page } = this.props;
        const pageText = text[page.name];

        const noNotifications = notifications.length < 1;

        return (
            <div>
                <BrokenText
                    splitText={splitText}
                    text={pageText}
                    maxWidth={60}
                    fontSize={40}
                    color={'red'}
                    pos={{ top: 3, left: 3 }}
                />
                {notifications.map((pos, i) => (
                    <Notification
                        pos={pos}
                        key={i}
                        id={i}
                        close={this.close}
                        bodyText={'Er frykten min overdreven?'}
                        buttonText={'kanskje'}
                    />
                ))}
                <PulsatingCircle
                    ref={this.circleRef}
                    onMouseEnter={() => this.setState({ splitText: noNotifications ? false : true })}
                    onMouseLeave={() => this.setState({ splitText: true })}
                    animation={clicked ? grow : pulse(splitText || !noNotifications ? 1.1 : 1.5)}
                    duration={splitText && noNotifications ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clicked: !state.clicked }))}
                    }
                    right={30}
                    bottom={20}
                    bgcol={'black'}
                    hover={!noNotifications}
                />
            </div>
        );
    }
}

export default Introduction3;