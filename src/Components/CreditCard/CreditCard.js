import React, { useState } from "react";
import bem from "../../bem";

import { ReactComponent as ChipIcon } from "../../Icons/chip.svg";

import "./creditcard.scss";

import CreditCardDetailsTable from "./CreditCardDetailsTable";

type Props = {
  name: string,
  apr: string,
  balanceTransferDuration: string,
  purchaseOfferDuration: string,
  creditAvailable: number,
  onClickCard: (number) => void,
  selected: boolean,
  number: string,
  focus: string,
  cvc: string,
  expiry: string,
};
const CreditCard = ({
  name,
  number,
  apr,
  balanceTransferDuration,
  purchaseOfferDuration,
  creditAvailable,
  onClickCard,
  selected,
  expiry,
}: Props) => {
  const baseClass = "c-credit-card";
  const [seeCardDetails, setSeeCardDetails] = useState(false);
  return (
    <>
      <div className={baseClass}>
        <div className={bem(baseClass, "card-info")}>
          <span
            style={{
              color: "#04AEB5",
              fontSize: "18px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            GUARANTEED APR{" "}
          </span>{" "}
          | You are guaranteed to get the APR shown if you're accepted
          <div
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            {name} - Guaranteed {apr} APR
          </div>
          <div
            onClick={onClickCard}
            className={bem(baseClass, selected ? "card-selected" : "card")}
          >
            <div>
              <ChipIcon />
            </div>

            <div className={bem(baseClass, "number")}>{number}</div>
            <div className={bem(baseClass, "name-expiry-block")}>
              <span className={bem(baseClass, "name")}>{name}</span>

              <span className={bem(baseClass, "expiry")}> exp:{expiry}</span>
            </div>
          </div>
        </div>
        <div>
          {seeCardDetails && (
            <CreditCardDetailsTable
              apr={apr}
              balanceTransferDuration={balanceTransferDuration}
              purchaseDuration={purchaseOfferDuration}
              creditAvailable={creditAvailable}
            />
          )}
        </div>
        <div>
          <button
            className={bem(baseClass, "see-details-btn")}
            onClick={() => setSeeCardDetails(!seeCardDetails)}
          >
            See card details
          </button>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
