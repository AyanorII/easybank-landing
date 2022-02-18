import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 3px;

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        display: none
    }
`

function MenuButton(props) {
    
    return (
        <Button onClick={props.handleMenu}>
            <img src={require(props.isMenuOpen ? "../images/icon-close.svg" : "../images/icon-hamburger.svg").default}/>
        </Button>
    )
}

export default MenuButton
