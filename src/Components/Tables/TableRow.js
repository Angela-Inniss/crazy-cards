// @flow
import * as React from "react";
import type { Node } from "react";
import bem from "../../bem";
import "./tableRow.scss";

type Props = {
  children: Node,
  className: string,
  cypress: string | null,
  onClick: () => any,
  clickable: boolean,
};

const TableRow = ({
  children,
  className,
  cypress,
  onClick,
  clickable,
}: Props) => (
  <tr
    className={`${bem("c-table-row", null, { clickable })} ${className}`}
    data-cy={cypress}
    onClick={onClick}
  >
    {children}
  </tr>
);

TableRow.defaultProps = {
  className: "",
  cypress: null,
  onClick: () => {},
  clickable: false,
};

export default TableRow;
