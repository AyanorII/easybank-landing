import React from "react";
import styled from "styled-components";
import Feature from "./Feature";
import FeaturesContent from "./FeaturesContent";

const Section = styled.section`
    background: #f4f5f7;
    text-align: center;
    padding: 4rem 1.5rem;
    margin-top: 5.5rem;

    @media (min-width: 768px) {
        text-align: left;
        padding: 6rem 11%;
        display: grid;
        column-gap: 1.875rem;
    }
`;

const features = [
    {
        title: "Online Banking",
        description:
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        icon: "images/icon-online.svg",
    },
    {
        title: "Simple Budgeting",
        description:
            "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.",
        icon: "images/icon-budgeting.svg",
    },
    {
        title: "Fast Onboarding",
        description:
            "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        icon: "images/icon-onboarding.svg",
    },
    {
        title: "Open API",
        description:
            "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        icon: "images/icon-api.svg",
    },
];

function FeaturesSection() {
    return (
        <Section>
            <FeaturesContent />
            {features.map((feature, index) => (
                <Feature
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={`${feature.icon}`}
                />
            ))}
        </Section>
    );
}

export default FeaturesSection;
