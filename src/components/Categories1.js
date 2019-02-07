import React, { Component } from 'react';
import styled from 'styled-components';

import { PulsatingCircle, grow, pulse } from '../styles/objects';
import BrokenText from './BrokenText';
import blackSilhouette from '../static/blackSilhouette1.png';
import { text } from '../constants';

const StyledCategories = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    text-align: left;
    position: relative;
`;

const Image = styled.img`
    display: inline-block;
    position: absolute;
    bottom: 0;
    opacity: 0.7;

`;

class Categories1 extends Component {
    constructor(props) {
        super(props);
        this.categoriesRef = React.createRef();
        this.state = {
            clicked: false,
            splitText0: true,
            splitText1: true,
        }
    }
    render() {
        const { splitText0, splitText1, clicked } = this.state;
        const { page } = this.props;

        const pageText = text[page.name];

        return (
            <StyledCategories>
                <Image src={blackSilhouette} alt="" />
                <PulsatingCircle
                    ref={this.categoriesRef}
                    onMouseEnter={() => this.setState({ splitText0: false })}
                    onMouseLeave={() => this.setState({ splitText0: true })}
                    animation={clicked ? grow : pulse(splitText0 ? 1.1 : 1.5)}
                    duration={splitText0 ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => this.setState(state => ({ clicked: !state.clicked }))}
                    top={35}
                    right={20}
                    bgcol={'white'}
                />
                <BrokenText
                    splitText={splitText0}
                    text={pageText[0]}
                    maxWidth={60}
                    fontSize={30}
                    color={'black'}
                    pos={{ bottom: 3, right: 2 }}
                />
                <PulsatingCircle
                    ref={this.categoriesRef}
                    onMouseEnter={() => this.setState({ splitText1: false })}
                    onMouseLeave={() => this.setState({ splitText1: true })}
                    animation={clicked ? grow : pulse(splitText1 ? 1.1 : 1.5)}
                    duration={splitText1 ? 1.7 : 1.5}
                    iterationCount={clicked ? 'forwards' : 'infinite'}
                    onClick={e => this.setState(state => ({ clicked: !state.clicked }))}
                    bottom={25}
                    left={20}
                    bgcol={'white'}
                />
                <BrokenText
                    splitText={splitText1}
                    text={pageText[1]}
                    maxWidth={60}
                    fontSize={30}
                    color={'black'}
                    pos={{ top: 3, left: 2 }}
                />
            </StyledCategories>
        );
    }
}

export default Categories1;