import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.div`
    max-width: 400px;
    margin: 40vh auto;
`;

const StyledWord = styled.div`
    position: relative;
    font-size: 20px;
    display: inline-block;
    margin: 0 0.3em 0 0;
    pointer-events: none;
    transition: all 0.3s ease-out;
`;

const randomPosition = () => (
    Math.floor(Math.random() * 90    * (Math.floor(Math.random() * 2) > 0 ? 1 : -1))
);

const BrokenText = ({ text, splitText }) => (
    <StyledParagraph>
        {text.split(' ').map((word, i) => (
            <StyledWord
                key={i}
                style={{
                    top: `${splitText ? randomPosition() / 2 : 0}vh`,
                    left: `${splitText ? randomPosition() / 2 : 0}vw`
                }}
            >
                {word}
            </StyledWord>
        ))}
    </StyledParagraph>
);

export default BrokenText;
