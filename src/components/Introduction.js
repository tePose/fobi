import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import BrokenText from './BrokenText';

const pulse = keyframes`
    0%      { transform: scale(1); }
    50%     { transform: scale(1.1); }
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
    animation: ${props => props.animation} 2s ease-in-out infinite;

    &:hover {
        cursor: pointer;
        animation-play-state: running;
    }
`;

class Introduction extends Component {
    state = {
        clickAnimation: false,
        splitText: true,
    }

    render() {
        const { splitText, clickAnimation } = this.state;
        const text = 'Fobi, angst for og unngåelse av situasjoner, naturfenomener, gjenstander eller dyr. Det er en form for frykt som er overdreven i forhold til situasjonen, ikke minsker ved fornuftige forklaringer og overtalelser, er utenfor viljemessig kontroll og som fører til unngåelse av den fryktede situasjonen.';

        return (
            <div>
                <RedCircle
                    onMouseEnter={() => this.setState({ splitText: false })}
                    onMouseLeave={() => this.setState({ splitText: true })}
                    animation={clickAnimation ? grow : pulse}
                    onClick={e => this.setState(state => ({ clickAnimation: !state.clickAnimation }))}
                />
                <BrokenText splitText={splitText} text={text} />
            </div>
        );
    }
}

export default Introduction;