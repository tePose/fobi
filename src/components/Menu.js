import React, { Component } from 'react';
import styled from 'styled-components';

import Notification from './Notification';
import { PulsatingCircle, grow, pulse } from '../styles/objects';
import whiteSilhouette from '../static/whiteSilhouette.png';

const StyledMenu = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    text-align: center;
    position: relative;
`;

const Image = styled.img`
    height: 100vh;
    display: inline-block;
`;

const HoverText = styled.div`
    position: absolute;
    color: ${props => props.theme.color};
    top: 40vh;
    width: 100%;
    text-align: center;
    font-size: 80px;
`;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.categoriesRef = React.createRef();
        this.symptomsRef = React.createRef();
        this.causesRef = React.createRef();
        this.state = {
            clickedCategories: false,
            clickedSymptoms: false,
            clickedCauses: false,
            showCategories: false,
            showSymptoms: false,
            showCauses: false,
            categoriesText: 'Inndelingen',
            symptomsText: 'Symptomene',
            causesText: 'Årsaken',
            notifications: [],
        }
    }

    close = id => {
        this.setState(state => ({
            notifications: [...state.notifications.slice(0, id), ...state.notifications.slice(id + 1)],
        }));
    }

    componentDidMount() {
        const { next, page } = this.props;

        this.setState({ notifications: [{top: 45, left: 35}] });

        this.categoriesRef.current.addEventListener("animationend", () => {
            if (this.state.clickedCategories) next( {...page,  next: page.paths.categories } );
        });

        this.symptomsRef.current.addEventListener("animationend", () => {
            if (this.state.clickedSymptoms) next( {...page,  next: page.paths.symptoms } );
        });

        this.causesRef.current.addEventListener("animationend", () => {
            if (this.state.clickedCauses) next( {...page,  next: page.paths.causes } );
        });
    }

    render() {
        const {
            clickedCategories,
            clickedSymptoms,
            clickedCauses,
            showCategories,
            showSymptoms,
            showCauses,
            categoriesText,
            symptomsText,
            causesText,
            notifications,
        } = this.state;

        const noNotifications = notifications.length < 1;

        return (
            <StyledMenu>
                <Image src={whiteSilhouette} alt="" />
                {notifications.map((pos, i) => (
                    <Notification
                        pos={pos}
                        key={i}
                        id={i}
                        close={this.close}
                        bodyText={'Kanskje jeg har en fobi?'}
                        buttonText={'kanskje'}
                    />
                ))}
                <PulsatingCircle
                    ref={this.categoriesRef}
                    onMouseEnter={() => this.setState({ showCategories: true })}
                    onMouseLeave={() => this.setState({ showCategories: false })}
                    animation={clickedCategories ? grow : pulse(showCategories && noNotifications ? 1.5 : 1.1)}
                    duration={showCategories  && noNotifications ? 1.7 : 1.5}
                    iterationCount={clickedCategories ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clickedCategories: !state.clickedCategories }));
                    }}
                    bottom={15}
                    left={20}
                    bgcol={'red'}
                    hover={noNotifications}
                />
                <PulsatingCircle
                    ref={this.symptomsRef}
                    onMouseEnter={() => this.setState({ showSymptoms: true })}
                    onMouseLeave={() => this.setState({ showSymptoms: false })}
                    animation={clickedSymptoms ? grow : pulse(showSymptoms && noNotifications ? 1.5 : 1.1)}
                    duration={showSymptoms && noNotifications ? 1.7 : 1.5}
                    iterationCount={clickedSymptoms ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clickedSymptoms: !state.clickedSymptoms }));
                    }}
                    top={20}
                    left={50}
                    bgcol={'red'}
                    hover={noNotifications}
                />
                <PulsatingCircle
                    ref={this.causesRef}
                    onMouseEnter={() => this.setState({ showCauses: true })}
                    onMouseLeave={() => this.setState({ showCauses: false })}
                    animation={clickedCauses ? grow : pulse(showCauses && noNotifications ? 1.5 : 1.1)}
                    duration={showCauses && noNotifications ? 1.7 : 1.5}
                    iterationCount={clickedCauses ? 'forwards' : 'infinite'}
                    onClick={e => {
                        if (noNotifications) this.setState(state => ({ clickedCauses: !state.clickedCauses }));
                    }}
                    bottom={25}
                    right={20}
                    bgcol={'red'}
                    hover={noNotifications}
                />
                {(showCategories && notifications.length < 1) && <HoverText>{categoriesText}</HoverText>}
                {(showSymptoms && notifications.length < 1) && <HoverText>{symptomsText}</HoverText>}
                {(showCauses && notifications.length < 1) && <HoverText>{causesText}</HoverText>}
            </StyledMenu>
        );
    }
}

export default Menu;