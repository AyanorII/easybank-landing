import React from "react";

function Logo(props) {
    return (
        <img
            src={require("../images/logo.svg").default}
            width="139px"
            className={props.className}
        />
    );
}

export default Logo;
