import React from 'react'
import styled from 'styled-components'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

const StyledHero = styled.section`
    display: grid;
    grid-auto-flow: column;

    @media (min-width: 768px) {
        grid-template-columns: 0.8fr 1fr;
        grid-auto-flow: column;
    }
`

function Hero() {
    return (
        <StyledHero>
            <HeroImage/>
            <HeroContent/>
        </StyledHero>
    )
}

export default Hero
