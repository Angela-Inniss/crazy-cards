import React, { useState } from "react";
import bem from "../../bem";

import "./creditcard.scss";

type Props = {
  name: string,
  apr: string,
  balanceTransferDuration: string,
  purchaseOfferDuration: string,
  creditAvailable: number,
  onClickCard: (number) => void,
  selected: boolean,
};
const CreditCard = ({
  name,
  apr,
  balanceTransferDuration,
  purchaseOfferDuration,
  creditAvailable,
  onClickCard,
  selected,
}: Props) => {
  const baseClass = "c-credit-card";
  const [seeCardDetails, setSeeCardDetails] = useState(false);
  return (
    <>
      <div
        onClick={onClickCard}
        className={bem(baseClass, selected ? "card-selected" : "card")}
      >
        <div> {name}</div>
        {seeCardDetails && (
          <>
            <div>{apr}</div>
            <div>{balanceTransferDuration}</div>
            <div> {purchaseOfferDuration}</div>
            <div>{creditAvailable}</div>
          </>
        )}
      </div>
      <button onClick={() => setSeeCardDetails(!seeCardDetails)}>
        See card details
      </button>
    </>
  );
};

export default CreditCard;


// Notes:
// need to add onclick to this card, and when the user clicks it need to display the details of the card
// could first of all hide the rest of the info on the card and only when the user clicks we display all the details
// selected should be "card.name"
// handling toggle see more state internally as it is specific to this component.
