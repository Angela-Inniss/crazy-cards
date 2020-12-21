import React from "react";
import Table from "../Tables/Table";
import TableBody from "../Tables/TableBody";
import TableRow from "../Tables/TableRow";
import TableCell from "../Tables/TableCell";
import "./creditCardDetailsTable.scss";
import bem from "../../bem";

type Props = {
  apr: string,
  balanceTransferDuration: string,
  purchaseDuration: string,
  creditAvailable: string,
};
const CreditCardDetailsTable = ({
  apr,
  balanceTransferDuration,
  purchaseDuration,
  creditAvailable,
}: Props) => {
  const baseClass = "c-credit-card-details-table";
  return (
    <div>
      <Table className={bem(baseClass, "table")}>
        <TableBody>
          <TableRow>
            <TableCell>
              <span>APR</span>
              <h3>{apr}</h3>
            </TableCell>
            <TableCell>
              <span>Balance Transfer Duration</span>
              <h3>{balanceTransferDuration}</h3>
            </TableCell>
            <TableCell>
              <span>Purchase Duration</span>
              <h3>{purchaseDuration}</h3>
            </TableCell>
            <TableCell>
              <span>creditAvailable</span>
              <h3>£{creditAvailable}</h3>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CreditCardDetailsTable;
