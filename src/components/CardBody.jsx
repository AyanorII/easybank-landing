import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;

    img {
        width: 100%;
    }
`

const Body = styled.div`
    display: grid;
    padding: 1.5rem 1.9375rem;
    row-gap: 8px;
    background: #FFF;

    span {
        color: #9597a5;
        font-size: 0.625rem;
        line-height: 18px;
        letter-spacing: -0.15px;
        font-weight: 400;
    }

    h3 {
        font-size: 1rem;
        line-height: 20px;
        font-weight: 300;
        letter-spacing: -0.29px;
        color: #2d314d;
    }

    p {
        color: #9597a5;
        font-size: 0.8125rem;
        font-weight: 300;
        line-height: 18px;
        letter-spacing: -0.2px;
    }
`;

function CardBody(props) {
    return (
        <Container>
            <img src={require("../" + props.img).default} width="316px" />
            <Body>
                <span>By {props.author}</span>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </Body>
        </Container>
    );
}

export default CardBody;
