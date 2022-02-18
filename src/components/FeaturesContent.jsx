import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 3.5rem;
    grid-column: 1 / 5;
`;

const Heading = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    line-height: 37px;
    letter-spacing: -0.5px;
    margin-top: 0;

    @media (min-width: 768px) {
        margin-bottom: 1rem;
        font-size: 2.5rem;
        line-height: 64px;
    }
`;

const Paragraph = styled.p`
    color: #9597A5;

    @media (min-width: 768px) {
        width: 60%;
        font-size: 1.125rem;
        line-height: 28px;
    }
`;

function FeaturesContent() {
    return (
        <Container>
            <Heading>Why choose Easybank?</Heading>
            <Paragraph>
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
            </Paragraph>
        </Container>
    );
}

export default FeaturesContent;
