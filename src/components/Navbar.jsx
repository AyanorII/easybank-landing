import { useState } from "react";
import styled from "styled-components";
import CTAButton from "./CTAButton";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";

const StyledNavbar = styled.div`
    background: #fff;
    padding: 1.375rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;
    
    @media (min-width: 768px) {
        padding: 30px 4%;
    }

    .mobile {
        display: none;

        @media (min-width: 768px) {
            display: initial;
        }
    }


`;

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <StyledNavbar>
            <Logo />
            <MenuButton handleMenu={handleMenu} isMenuOpen={isMenuOpen} />
            <NavLinks isMenuOpen={isMenuOpen} />
            <CTAButton className="mobile" />
        </StyledNavbar>
    );
}

export default Navbar;
