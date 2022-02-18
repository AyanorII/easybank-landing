import styled from "styled-components"
import Copyright from "./Copyright"
import CTAButton from "./CTAButton"
import FooterLinks from "./FooterLinks"
import Logo from "./Logo"
import SocialMediaLinks from "./SocialMediaLinks"

const StyledFooter = styled.footer`
    background-color: #2D314D;
    display: grid;
    place-items: center;    
    padding-block: 2.5rem;
    row-gap: 2rem;

    .invert {
        filter: brightness(100);
    }
`

function Footer() {
    return (
        <StyledFooter>
            <Logo className="invert"/>
            <SocialMediaLinks />
            <FooterLinks/>
            <CTAButton/>
            <Copyright/>
        </StyledFooter>
    )
}

export default Footer
