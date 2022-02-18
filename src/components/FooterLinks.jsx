import React from "react";
import styled from "styled-components";

const List = styled.li`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    list-style: none;
    text-align: center;
`;

const Link = styled.a`
    color: #fff;
    line-height: 26px;
    font-weight: 400;
    letter-spacing: -0.23px;
`;

function FooterLinks() {
    const links = [
        "About Us",
        "Contact",
        "Blog",
        "Careers",
        "Support",
        "Privacy Policy",
    ];

    return (
        <div>
            <List>
                {links.map((link, index) => (
                    <ul key={index}>
                        <Link src="#">{link}</Link>
                    </ul>
                ))}
            </List>
        </div>
    );
}

export default FooterLinks;
