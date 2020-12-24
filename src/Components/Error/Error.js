// @flow
import React from "react";

import "./Error.scss";

type Props = {
  children: any,
};

const Error = ({ children, className }: Props) => (
  <div className={`c-error ${className}`}>{children}</div>
);

Error.defaultProps = {
  className: "",
};

export default Error;
