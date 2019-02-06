import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { zIndexes, pages, text } from '../constants';
import BrokenText from './BrokenText';

const pulse = scale => keyframes`
    0%      { transform: scale(1); }
    50%     { transform: scale(${scale}); }
    100%    { transform: scale(1); }
`;

const grow = keyframes`
    100%    { transform: scale(100); }
`;

const RedCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${props => props.theme.red};
    position: absolute;
    top: 20vh;
    left: 20vh;
    animation: ${props => css`${props.animation} ${props.duration}s ease-in-out ${props.iterationCount}`} ;
    z-index: ${zIndexes.RED_BUTTON};
    transition: transform 1s ease;

    &:hover {
        cursor: pointer;
        animation-play-state: running;
    }
`;

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
        const { completed, page } = this.props;

        this.redCircleRef.current.addEventListener("animationend", () => {
            if (this.state.clicked) completed(page);
        });
    }

    render() {
        const { splitText, clicked } = this.state;
        const { page } = this.props;

        const pageText = text[page];

        return (
            <div>
                <RedCircle
                    ref={this.redCircleRef}
                    onMouseEnter={() => this.setState({ splitText: false })}
                    onMouseLeave={() => this.setState({ splitText: true })}
                    animation={clicked ? grow : pulse(splitText ? 1.1 : 1.5)}
                    duration={splitText ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => this.setState(state => ({ clicked: !state.clicked }))}
                />
                <BrokenText splitText={splitText} text={pageText} />
            </div>
        );
    }
}

export default Introduction;