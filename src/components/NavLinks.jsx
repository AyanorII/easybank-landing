import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: -0.15px;
    color: #000;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
            margin: 0;
    }    
`

const Nav = styled.nav`
    background: #FFF;
    position: absolute;
    top: 65px;
    right: 0;
    padding-block: 2rem;
    display: grid;
    place-items: center;
    transform: translateX(${props => props.isMenuOpen ? 0 : "600px"});
    transition: all 0.5s;
    width: 70%;

    @media (min-width: 768px) {
        position: static;
        transform: translateX(0);
        grid-auto-flow: column;
        width: 50%;
        padding: 0;
    }    
`

function NavLinks(props) {
    return (
        <Nav isMenuOpen={props.isMenuOpen}>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Blog</Link>
            <Link>Careers</Link>
        </Nav>
    )
}

export default NavLinks
