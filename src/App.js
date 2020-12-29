import React, { useState } from "react";
import bem from "./bem";
import UserInputForm from "./Forms/UserInputForm";
import CreditCard from "./Components/CreditCard/CreditCard";
import { allCards } from "./cardData";

import "./App.scss";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleSelectCard = (id) => {
    if (selectedCards.includes(id)) {
      const filteredIds = selectedCards.filter((c) => c !== id);
      setSelectedCards([...filteredIds]);
    } else {
      setSelectedCards([...selectedCards, id]);
    }
    return selectedCards;
  };

  const addUpCreditAvailable = (selectedCards) => {
    const chosenCards = selectedCards.map((id) => {
      const foundCard = allCards.find((card) => {
        return card.id === id;
      });
      return foundCard;
    });

    const result = chosenCards.reduce((acc, card) => {
      return acc + card.creditAvailable;
    }, 0);
    return result;
  };

  const totalCredit = addUpCreditAvailable(selectedCards);

  const handleSubmitData = (userInput) => {
    const { employmentStatus } = userInput.state;
    const { earnings } = userInput.state;

    let filtered = [...allCards];

    if (employmentStatus === "student" && earnings < 16000) {
      filtered = allCards.filter((card) => card.name !== "LiquidCard");
    }
    if (employmentStatus === "student" && earnings >= 16000) {
      filtered = allCards;
    }
    if (employmentStatus !== "student" && earnings < 16000) {
      filtered = allCards.filter((card) => card.name === "AnywhereCard");
    }
    if (employmentStatus !== "student" && earnings >= 16000) {
      filtered = allCards.filter((card) => card.name !== "StudentCard");
    }

    setCards(filtered);
  };
  const baseClass = "c-container";

  return (
    <div className={baseClass}>
      <h1 className={bem(baseClass, "heading")}>Welcome to Crazy Cards</h1>
      <UserInputForm submitData={handleSubmitData} />
      {Boolean(
        cards.length && (
          <div className={bem(baseClass, "sub-heading")}>
            <h1>Cards available to you displayed are below:</h1>
            <h3 className={bem(baseClass, "sub-sub-heading")}>
              Click on the card to see the credit available to you
            </h3>
          </div>
        )
      )}
      {cards.map(
        ({
          id,
          name,
          number,
          apr,
          balanceTransfer,
          purchaseDuration,
          creditAvailable,
          expiry,
        }) => (
          <CreditCard
            key={id}
            name={name}
            number={number}
            apr={apr}
            balanceTransferDuration={balanceTransfer}
            purchaseOfferDuration={purchaseDuration}
            creditAvailable={creditAvailable}
            expiry={expiry}
            onClickCard={() => handleSelectCard(id)}
            selected={selectedCards.includes(id)}
          />
        )
      )}
      {selectedCards.length ? (
        <div className={bem(baseClass, "total-credit")}>
          Total Credit available: £{totalCredit}
        </div>
      ) : null}
    </div>
  );
};

export default Container;
