import React, { Component } from 'react';
import styled from 'styled-components';

import { PulsatingCircle, grow, pulse } from '../styles/objects';
import BrokenText from './BrokenText';
import redSilhouette from '../static/redSilhouette1.png';
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

class Categories2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            splitText0: true,
            splitText1: true,
            splitText2: true,
            splitText3: true,
        }
    }

    componentDidMount() {
        console.log('hie')
    }
    render() {
        return (
            <StyledCategories>
                <Image src={redSilhouette} alt="" />
            </StyledCategories>
        );
    }
}

export default Categories2;