import styled, { css, keyframes } from 'styled-components';
import { zIndexes } from '../constants';

export const pulse = scale => keyframes`
    0%      { transform: scale(1); }
    50%     { transform: scale(${scale}); }
    100%    { transform: scale(1); }
`;

export const grow = keyframes`
    100%    { transform: scale(100); }
`;

export const PulsatingCircle = styled.div`
    width: ${props => props.width || 100}px;
    height: ${props => props.height || 100}px;
    border-radius: 50%;
    background-color: ${props => props.theme[props.bgcol] || props.theme.red};
    position: ${props => props.position || 'absolute'};
    top: ${props => props.top || undefined}vh;
    right: ${props => props.right || undefined}vw;
    bottom: ${props => props.bottom || undefined}vh;
    left: ${props => props.left || undefined}vw;

    animation: ${props => css`${props.animation || 'none'} ${props.duration}s ease-in-out ${props.iterationCount}`} ;
    z-index: ${zIndexes.RED_BUTTON};
    transition: transform 1s ease;

    &:hover {
        cursor: ${props => props.hover ? 'pointer' : 'default' };
        animation-play-state: running;
    }
`;