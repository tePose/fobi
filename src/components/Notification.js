import React, { Component } from 'react';
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
    box-shadow: 0px 0px 40px ${props => props.theme.black};
    animation: ${popUp} 0.2s ease forwards;
`;

const Header = styled.div`
    height: 30px;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    line-height: 30px;
    padding-left: 10px;

    &:hover {
        cursor: move;
    }
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

class Notification extends Component {
    constructor(props) {
        super(props);
        this.notificationRef = React.createRef();
        this.state = {
            top: `${props.pos.top}vh` || undefined,
            right: `${props.pos.right}vw` || undefined,
            bottom: `${props.pos.bottom}vh` || undefined,
            left: `${props.pos.left}vw` || undefined,
            dragging: false,
            relative: undefined,
        }
    }

    moveContainer = e => {
        if (!this.state.dragging) return;
        e.persist();
        this.setState(state => ({
            top: `${e.pageY - state.relative.y}px`,
            left: `${e.pageX - state.relative.x}px`,
        }));
        e.stopPropagation();
        e.preventDefault();
    }

    handleMouseDown = e => {
        const { left, top } = this.notificationRef.current.getBoundingClientRect();
        this.setState({
            relative: {
                x: e.pageX - left,
                y: e.pageY - top
            },
            top: `${top}px`,
            left: `${left}px`,
            bottom: undefined,
            right: undefined,
            dragging: true,
        });
        e.stopPropagation()
        e.preventDefault();
    }

    // TODO: This isn't always fired
    handleMouseUp = e => {
        this.setState({ dragging: false });
        e.stopPropagation()
        e.preventDefault();
    }

    render() {
        const { top, right, bottom, left, dragging } = this.state;
        const { headerText, bodyText, id, buttonText, close } = this.props;

        return (
            <Container
                ref={this.notificationRef}
                style={{
                    top,
                    right,
                    bottom,
                    left,
                }}
                pos={{ top, right, bottom, left }}
            >
                <Header
                    onMouseMove={e => dragging && this.moveContainer(e)}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                >
                    {headerText || 'Ops!'}
                </Header>
                <Body>
                    {bodyText || 'Du har fobi!'}
                </Body>
                <Footer>
                    <AcceptButton onClick={() => close(id)}>
                        {buttonText || 'Ok'}
                    </AcceptButton>
                </Footer>
            </Container>
        );
    }
};

export default Notification;

