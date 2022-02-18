import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    row-gap: 1rem;
    text-align: center;
    place-items: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        text-align: left;
        place-items: unset;
    }

    h3 {
        font-weight: 300;
        font-size: 1.25rem;
        letter-spacing: -0.36px;
        line-height: 28px;
        margin: 0;
        margin-top: 8px;

        @media (min-width: 768px) {
            margin-top: 30px;
            font-size: 1.5rem;
        }
    }

    p {
        font-weight: 400;
        letter-spacing: -0.23px;
        color: #9597A5;
        margin: 0;

        @media (min-width: 768px) {
            line-height: 26px;
        }
    }
`

function Feature(props) {
    return (
        <Container>
            <img src={require("../" + props.icon).default} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </Container>
    )
}

export default Feature
