import React from "react";
import styled from "styled-components";
import CardBody from "./CardBody";

const StyledCard = styled.div`
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 1.5rem
`;

function Card({ author, title, description, img }) {
    return (
        <StyledCard>
            <CardBody
                author={author}
                title={title}
                description={description}
                img={img}
            />
        </StyledCard>
    );
}

export default Card;
