import styled, { css } from 'styled-components';
import { zIndexes } from '../constants';

export const PulsatingCircle = styled.div`
    width: ${props => props.width || 100}px;
    height: ${props => props.height || 100}px;
    border-radius: 50%;
    background-color: ${props => props.theme.red};
    position: ${props => props.position || 'absolute'};
    top: ${props => props.top || 20}vh;
    left: ${props => props.left || 20}vh;
    animation: ${props => css`${props.animation || 'none'} ${props.duration}s ease-in-out ${props.iterationCount}`} ;
    z-index: ${zIndexes.RED_BUTTON};
    transition: transform 1s ease;

    &:hover {
        cursor: pointer;
        animation-play-state: running;
    }
`;