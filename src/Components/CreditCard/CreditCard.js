import React, { useState } from "react";
import bem from "../../bem";

import "react-credit-cards/lib/styles.scss";

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
        <span
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            margin: "30px",
          }}
        >
          {name} - Guaranteed {apr} APR
        </span>
        <div className={bem(baseClass, "container")}>
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
          <div style={{ margin: "auto" }}>
            {seeCardDetails && (
              <CreditCardDetailsTable
                apr={apr}
                balanceTransferDuration={balanceTransferDuration}
                purchaseDuration={purchaseOfferDuration}
                creditAvailable={creditAvailable}
              />
            )}
          </div>
          <div style={{ margin: "auto" }}>
            <button
              className={bem(baseClass, "see-details-btn")}
              onClick={() => setSeeCardDetails(!seeCardDetails)}
            >
              See card details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;

// Notes:
// need to add onclick to this card, and when the user clicks it need to display the details of the card
// could first of all hide the rest of the info on the card and only when the user clicks we display all the details
// selected should be "card.name"
// handling toggle see more state internally as it is specific to this component.
