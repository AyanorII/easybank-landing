import React from "react";
import styled from "styled-components";

const List = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    column-gap: 1rem;
`;

function SocialMediaLinks() {
    const socialMedia = [
        "facebook",
        "youtube",
        "twitter",
        "pinterest",
        "instagram",
    ];

    return (
        <>
            <List>
                {socialMedia.map((site, index) => (
                    <ul>
                        <a href={`https://${site}.com`}>
                            <img
                                src={
                                    require(`../images/icon-${site}.svg`).default
                                }
                                width="24px"
                            />
                        </a>
                    </ul>
                ))}
            </List>
        </>
    );
}

export default SocialMediaLinks;
