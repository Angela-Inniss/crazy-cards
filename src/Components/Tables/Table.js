// @flow
import React from "react";
import type { Element } from "react";

import TableBody from "./TableBody";

type Props = {
  children: Element<typeof TableBody>,
  className: string,
};

const Table = ({ children, className }: Props) => (
  <table className={`c-table ${className}`}>{children}</table>
);

Table.defaultProps = {
  className: "",
};

export default Table;
