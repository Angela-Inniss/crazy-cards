// @flow

import React from "react";

import bem from "../../bem";
import "./panel.scss";
type Props = {
    type: "small" | "medium" | "large" | "modal",
    children: Node,
};

const Card = ({ children, type }: Props) => {
    const baseClass = "c-card";

    return (
        <div className={bem(baseClass, "", { cardType: type })}>{children}</div>
    );
};

export default Card;
