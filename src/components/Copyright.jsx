import React from 'react'
import styled from 'styled-components'

const StyledCopyright = styled.span`
    opacity: 0.5;
    color: #FFF;
`

function Copyright() {
    return (
        <div>
            <StyledCopyright>© Easybank. All Rights Reserved</StyledCopyright>
        </div>
    )
}

export default Copyright
