import React from "react";
import styled from "styled-components";
import CTAButton from "./CTAButton";

const Container = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 768px) {
        text-align: left;
        order: -1;
        padding: 10.625rem 17%
    }
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    line-height: 47px;
    font-weight: 300;
    letter-spacing: -0.7px;
    margin-bottom: 0;

    @media (min-width: 768px) {
        margin-bottom: 1.5rem
    }
`;

const Paragraph = styled.p`
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.23px;
    color: #9597A5;
    margin-bottom: 2rem;
`;

function HeroContent() {
    return (
        <Container>
            <Heading>Next generation digital banking</Heading>
            <Paragraph>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
            </Paragraph>
            <CTAButton />
        </Container>
    );
}

export default HeroContent;
