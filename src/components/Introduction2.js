import React, { Component } from 'react';

import Notification from './Notification';
import BrokenText from './BrokenText';
import { text } from '../constants';
import { PulsatingCircle, grow, pulse } from '../styles/objects';

class Introduction2 extends Component {
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

        this.setState({ notifications: [{top: 10, left: 20}] });

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
                    maxWidth={100}
                    fontSize={100}
                    color={'black'}
                    pos={{ top: 3, left: 3 }}
                />
                {notifications.map((pos, i) => (
                    <Notification
                        pos={pos}
                        key={i}
                        id={i}
                        close={this.close}
                        bodyText={'Har jeg en fobi?'}
                        buttonText={'kanskje'}
                    />
                ))}
                <PulsatingCircle
                    ref={this.circleRef}
                    onMouseEnter={() => this.setState({ splitText: false })}
                    onMouseLeave={() => this.setState({ splitText: true })}
                    animation={clicked ? grow : pulse(splitText || !noNotifications ? 1.1 : 1.5)}
                    duration={splitText && noNotifications ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clicked: !state.clicked }))}
                    }
                    top={15}
                    left={25}
                    bgcol={'white'}
                    hover={!noNotifications}
                />
            </div>
        );
    }
}

export default Introduction2;