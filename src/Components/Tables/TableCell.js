// @flow
import React from "react";
import type { Node } from "react";
import bem from "../../bem";

import "./tableCell.scss";

type Props = {
  children?: Node,
  stretch: boolean,
  center: boolean,
  className: string,
  borderRight: boolean,
};

const TableCell = ({
  children,
  stretch,
  center,
  className,
  borderRight,
}: Props) => {
  const baseClass = "c-table-cell";
  const modifiers = { stretch, center, borderRight };

  return (
    <td className={`${bem(baseClass, null, modifiers)} ${className}`}>
      {children}
    </td>
  );
};

TableCell.defaultProps = {
  stretch: false,
  center: false,
  className: "",
  borderRight: false,
};

export default TableCell;
