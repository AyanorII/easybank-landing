import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Section = styled.section`
    padding: 5.5rem 1.5rem;
    background: #F7F7F7;
`;

const Heading = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    line-height: 37px;
    letter-spacing: -0.57px;
    text-align: center;
    margin-bottom: 1.9375rem;
`;

const articles = [
    {
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        description:
            "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        img: "images/image-currency.jpg",
    },
    {
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        description:
            "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        img: "images/image-restaurant.jpg",
    },
    {
        author: "Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        description:
            "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        img: "images/image-plane.jpg",
    },
    {
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        description:
            "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        img: "images/image-confetti.jpg",
    },
];

function Articles() {
    return (
        <Section>
            <Heading>Lastest Articles</Heading>
            {articles.map((article, index) => (
                <Card
                    key={index}
                    author={article.author}
                    title={article.title}
                    description={article.description}
                    img={article.img}
                />
            ))}
        </Section>
    );
}

export default Articles;
