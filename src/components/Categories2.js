import React, { Component } from 'react';
import styled from 'styled-components';

import Notification from './Notification';
import { PulsatingCircle, grow, pulse } from '../styles/objects';
import BrokenText from './BrokenText';
import redSilhouette from '../static/redSilhouette1.png';
import { text } from '../constants';


const StyledCategories = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    text-align: left;
    position: relative;
`;

const Image = styled.img`
    display: inline-block;
    position: absolute;
    bottom: 0;
    opacity: 0.7;
    min-width: 100%;
    min-height: 100%;
`;

const Text = styled.div`
    color: ${props => props.theme.black};
    font-size: 40px;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 40vh;
`;

class Categories2 extends Component {
    constructor(props) {
        super(props);
        this.categories0Ref = React.createRef();
        this.categories1Ref = React.createRef();
        this.categories2Ref = React.createRef();
        this.categories3Ref = React.createRef();

        this.state = {
            clicked: false,
            splitText0: true,
            splitText1: true,
            splitText2: true,
            splitText3: true,
            notifications: [],
        }
    }

    close = id => {
        this.setState(state => ({
            notifications: [...state.notifications.slice(0, id), ...state.notifications.slice(id + 1)],
        }));
    }

    componentDidMount() {
        const { next, page } = this.props;

        this.setState({ notifications: [{top: 45, left: 35}] });


        [this.categories0Ref, this.categories1Ref, this.categories2Ref, this.categories3Ref].forEach(categoryRef =>
            categoryRef.current.addEventListener("animationend", () => {
                if (this.state.clicked) next(page);
            })
        );
    }

    render() {
        const { splitText0, splitText1, splitText2, splitText3, clicked, notifications } = this.state;
        const { page } = this.props;

        const pageText = text[page.name];
        const noNotifications = notifications.length < 1;

        return (
            <StyledCategories>
                <Image src={redSilhouette} alt="" />
                <Text>{pageText[0]}</Text>
                {notifications.map((pos, i) => (
                    <Notification
                        pos={pos}
                        key={i}
                        id={i}
                        close={this.close}
                        bodyText={'Jeg er jo redd av og til?'}
                        buttonText={'Jo'}
                    />
                ))}
                <BrokenText
                    splitText={splitText0}
                    text={pageText[1]}
                    maxWidth={30}
                    fontSize={30}
                    color={'black'}
                    pos={{ top: 3, left: 2 }}
                />
                <BrokenText
                    splitText={splitText1}
                    text={pageText[2]}
                    maxWidth={30}
                    fontSize={30}
                    color={'black'}
                    pos={{ top: 3, right: 2 }}
                />
                <BrokenText
                    splitText={splitText2}
                    text={pageText[3]}
                    maxWidth={30}
                    fontSize={30}
                    color={'black'}
                    pos={{ bottom: 3, left: 2 }}
                />
                <BrokenText
                    splitText={splitText3}
                    text={pageText[4]}
                    maxWidth={30}
                    fontSize={30}
                    color={'black'}
                    pos={{ bottom: 3, right: 2 }}
                />
                <PulsatingCircle
                    ref={this.categories0Ref}
                    onMouseEnter={() => this.setState({ splitText0: false })}
                    onMouseLeave={() => this.setState({ splitText0: true })}
                    animation={clicked ? grow : pulse(splitText0 && noNotifications ? 1.5 : 1.1)}
                    duration={splitText0 && noNotifications ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clicked: !state.clicked }));
                    }}
                    bottom={25}
                    left={20}
                    bgcol={'black'}
                    hover={!noNotifications}
                />
                <PulsatingCircle
                    ref={this.categories1Ref}
                    onMouseEnter={() => this.setState({ splitText1: false })}
                    onMouseLeave={() => this.setState({ splitText1: true })}
                    animation={clicked ? grow : pulse(splitText1 && noNotifications ? 1.5 : 1.1)}
                    duration={splitText1 && noNotifications ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clicked: !state.clicked }));
                    }}
                    top={25}
                    left={40}
                    bgcol={'black'}
                    hover={!noNotifications}
                />
                <PulsatingCircle
                    ref={this.categories2Ref}
                    onMouseEnter={() => this.setState({ splitText2: false })}
                    onMouseLeave={() => this.setState({ splitText2: true })}
                    animation={clicked ? grow : pulse(splitText2 && noNotifications ? 1.5 : 1.1)}
                    duration={splitText2 && noNotifications ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clicked: !state.clicked }));
                    }}
                    top={40}
                    right={10}
                    bgcol={'black'}
                    hover={!noNotifications}
                />
                <PulsatingCircle
                    ref={this.categories3Ref}
                    onMouseEnter={() => this.setState({ splitText3: false })}
                    onMouseLeave={() => this.setState({ splitText3: true })}
                    animation={clicked ? grow : pulse(splitText3 && noNotifications ? 1.5 : 1.1)}
                    duration={splitText3 && noNotifications ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clicked: !state.clicked }));
                    }}
                    bottom={20}
                    right={35}
                    bgcol={'black'}
                    hover={!noNotifications}
                />
            </StyledCategories>
        );
    }
}

export default Categories2;