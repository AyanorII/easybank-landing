import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    outline: none;
    background: linear-gradient(160deg, rgba(51,211,94,1) 0%, rgba(42,192,217,1) 100%);
    font-weight: 700;
    color: #FFF;
    border-radius: 30px;
    width: 163px;
    height: 45px;
`

function CTAButton(props) {
    return (
        <Button className={props.className}>
            Request Invite
        </Button>
    )
}

export default CTAButton
