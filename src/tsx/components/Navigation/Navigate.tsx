import React from 'react'
import { StyledNavigate } from './StyledNavigation';
const NavigateBackIcon = require('../../../assets/navigate-back.svg');
const NavigateForwardIcon = require('../../../assets/navigate-forward.svg');

export interface NavigateProps {
    direction: "back" | "forward"
}

function Navigate(props: NavigateProps) {
    return (
        <StyledNavigate>
            <img src={props.direction == "back" ? NavigateBackIcon : NavigateForwardIcon} alt="navigate" />
        </StyledNavigate>
    );
}

export default Navigate;