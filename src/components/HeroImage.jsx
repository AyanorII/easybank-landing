import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    overflow: hidden;
    z-index: -1;

    @media (min-width: 768px) {
        position: relative;
        overflow: visible;
        top: 0;
        
        img {
            width: 100%;
        }
    }
`

const MobileBg = styled.img`
    width: 100%;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const DesktopBg = styled.img`
    display: none;

    @media (min-width: 1024px) {
        display: initial;
        position: absolute;
        inset: 0
    }
`;

const MockUp = styled.img`
    position: absolute;
    top: -75px;
    left: 0;
    width: 100%;
    z-index: 100;
`

function HeroImage() {
    return (
        <Container>
            <MobileBg src={require("../images/bg-intro-mobile.svg").default}/>
            <DesktopBg src={require("../images/bg-intro-desktop.svg").default}/>
            <MockUp src={require("../images/image-mockups.png").default}/>
        </Container>
    );
}

export default HeroImage;
