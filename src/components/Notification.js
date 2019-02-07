import React from 'react';
import styled, { keyframes } from 'styled-components';
import { zIndexes } from '../constants';

const popUp = keyframes`
    from {
        width: 0px;
        height: 0px;
    }
    to {
        width: 400px;
        height: auto;
    }
`;

const Container = styled.div`
    width: 400px;
    border: 2px solid ${props => props.theme.white};
    z-index: ${zIndexes.NOTIFICATION};
    position: absolute;
    background-color: ${props => props.theme.grey};
    font-weight: 400;
    top: ${props => `${props.pos.top}vh` || undefined};
    right: ${props => `${props.pos.right}vw` || undefined};
    bottom: ${props => `${props.pos.bottom}vh` || undefined};
    left: ${props => `${props.pos.left}vw` || undefined};
    box-shadow: 0px 0px 40px ${props => props.theme.black};
    animation: ${popUp} 0.2s ease forwards;
`;

const Header = styled.div`
    height: 30px;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    line-height: 30px;
    padding-left: 10px;
`;

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 0 10px 0;
`;

const AcceptButton = styled.button`
    margin: 0 10px;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    font-size: 14px;
    padding: 10px;
    min-width: 100px;

    &:hover {
        cursor: pointer;
    }
`;

const Body = styled.div`
    color: ${props => props.theme.black};
    padding: 30px;
    text-align: center;
    width: calc(100% - 60px);
`;

const Notification = props => (
        <Container pos={props.pos || {}}>
            <Header>{props.headerText || 'Ops!'}</Header>
            <Body>
                {props.bodyText || 'Du har fobi!'}
            </Body>
            <Footer>
                <AcceptButton onClick={() => props.close(props.id)}>
                    {props.buttonText || 'Ok'}
                </AcceptButton>
            </Footer>
        </Container>
);

export default Notification;

