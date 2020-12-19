import React, { useState } from "react";

import UserInputForm from "./Forms/UserInputForm";
import CreditCard from "./Components/CreditCard/CreditCard";

import { allCards } from "./cardData";

import "./App.css";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSelectCard = (id) => {
    if (selectedCards.includes(id)) {
      const filteredIds = selectedCards.filter((c) => c !== id);
      setSelectedCards([...filteredIds]);
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };

  const addUpCreditAvailable = () => {
    const chosenCards = selectedCards.map((id) => {
      const foundCard = allCards.find((card) => {
        return card.id === id;
      });
      return foundCard;
    });
    const result = chosenCards.reduce((acc, card) => {
      return acc + card.creditAvailable;
    }, 0);
    setTotal(result);

    return result;
  };

  const handleSubmitData = (userInput) => {
    const { employmentStatus } = userInput.state;
    const { earnings } = userInput.state;

    let filtered = [...allCards];

    if (employmentStatus === "student" && earnings < 16000) {
      filtered = allCards.filter((card) => card.name !== "liquidCard");
    }
    if (employmentStatus === "student" && earnings >= 16000) {
      filtered = allCards;
    }
    if (employmentStatus !== "student" && earnings < 16000) {
      filtered = allCards.filter((card) => card.name === "anywhereCard");
    }
    if (employmentStatus !== "student" && earnings >= 16000) {
      filtered = allCards.filter((card) => card.name !== "studentCard");
    }

    setCards(filtered);
  };

  return (
    <div className="Container">
      <UserInputForm submitData={handleSubmitData} />
      {cards.map(
        ({
          id,
          name,
          apr,
          balanceTransfer,
          purchaseDuration,
          creditAvailable,
        }) => (
          <CreditCard
            key={id}
            name={name}
            apr={apr}
            balanceTransferDuration={balanceTransfer}
            purchaseOfferDuration={purchaseDuration}
            creditAvailable={creditAvailable}
            onClickCard={() => handleSelectCard(id)}
            selected={selectedCards.includes(id)}
          />
        )
      )}

      <button onClick={addUpCreditAvailable}>See credit available </button>
      {total}
    </div>
  );
};

export default Container;
