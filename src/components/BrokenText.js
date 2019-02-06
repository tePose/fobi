import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.div`
    max-width: 400px;
    margin: 40vh auto;
`;

const StyledWord = styled.div`
    position: relative;
    font-family: sans-serif;
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

const BrokenText = ({ text, splitText }) => (
    <StyledParagraph>
        {text.split(' ').map((word, i) => (
            <StyledWord
                key={i}
                fontSize={splitText ? 80 : 20}
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
