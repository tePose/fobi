import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { text } from '../constants';
import BrokenText from './BrokenText';
import { PulsatingCircle } from '../styles/objects';

const pulse = scale => keyframes`
    0%      { transform: scale(1); }
    50%     { transform: scale(${scale}); }
    100%    { transform: scale(1); }
`;

const grow = keyframes`
    100%    { transform: scale(100); }
`;

const StyledIntroduction = styled.div``;

class Introduction extends Component {
    constructor(props) {
        super(props);
        this.redCircleRef = React.createRef();
        this.state = {
            clicked: false,
            splitText: true,
        }
    }

    componentDidMount() {
        const { next, page } = this.props;

        this.redCircleRef.current.addEventListener("animationend", () => {
            if (this.state.clicked) next(page);
        });
    }

    render() {
        const { splitText, clicked } = this.state;
        const { page } = this.props;

        const pageText = text[page.name];

        return (
            <StyledIntroduction>
                <PulsatingCircle
                    ref={this.redCircleRef}
                    onMouseEnter={() => this.setState({ splitText: false })}
                    onMouseLeave={() => this.setState({ splitText: true })}
                    animation={clicked ? grow : pulse(splitText ? 1.1 : 1.5)}
                    duration={splitText ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => this.setState(state => ({ clicked: !state.clicked }))}
                />
                <BrokenText
                    splitText={splitText}
                    text={pageText}
                    maxWidth={60}
                    fontSize={splitText ? 100 : 40}
                    position={{ bottom: 10, left: 7 }}
                />
            </StyledIntroduction>
        );
    }
}

export default Introduction;