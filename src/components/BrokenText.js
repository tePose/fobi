import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.div`
    max-width: ${props => props.maxWidth}vw;
    position: ${props => props.position || 'absolute'};
    top: ${props => `${props.pos.top}vh` || undefined};
    right: ${props => `${props.pos.right}vw` || undefined};
    bottom: ${props => `${props.pos.bottom}vh` || undefined};
    left: ${props => `${props.pos.left}vw` || undefined};
`;

const StyledWord = styled.div`
    position: relative;
    font-size: ${props => props.fontSize}px;
    display: inline-block;
    margin: 0 0.3em 0 0;
    pointer-events: none;
    transition:
        top 0.3s ease-out,
        left 0.3s ease-out,
        font-size 0.1s ease;
`;

const randomPosition = () => (
    Math.floor(Math.random() * 60 * (Math.floor(Math.random() * 2) > 0 ? 1 : -1))
);

const BrokenText = ({ text = '', splitText = false, maxWidth = 400, position = {}, fontSize = 20 }) => (
    <StyledParagraph maxWidth={maxWidth} pos={position}>
        {text.split(' ').map((word, i) => (
            <StyledWord key={i}
                fontSize={fontSize}
                style={{
                    top: `${splitText ? randomPosition() : 0}vh`,
                    left: `${splitText ? randomPosition() : 0}vw`,
                }}
            >
                {word}
            </StyledWord>
        ))}
    </StyledParagraph>
);

export default BrokenText;
