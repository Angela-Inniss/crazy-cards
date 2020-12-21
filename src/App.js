import React, { useState } from "react";
import bem from "./bem";
import UserInputForm from "./Forms/UserInputForm";
import CreditCard from "./Components/CreditCard/CreditCard";
import "./App.scss";
import { allCards } from "./cardData";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  // function to select  card
  const handleSelectCard = (id) => {
    if (selectedCards.includes(id)) {
      const filteredIds = selectedCards.filter((c) => c !== id);
      setSelectedCards([...filteredIds]);
    } else {
      setSelectedCards([...selectedCards, id]);
    }
    console.log("inside selected card");
    return selectedCards; // changed this to a return
  };
  // end of function 1

  //  function to add up credit
  const addUpCreditAvailable = (selectedCards) => {
    console.log(selectedCards);
    console.log("inside add up credit");
    const chosenCards = selectedCards.map((id) => {
      const foundCard = allCards.find((card) => {
        return card.id === id;
      });
      return foundCard; // this is an array of card objects now [{},{}]
    });
    const result = chosenCards.reduce((acc, card) => {
      return acc + card.creditAvailable;
    }, 0);

    console.log(result);
    return result;
  };

  // end of function 2

  console.log(selectedCards);

  const totalCredit = addUpCreditAvailable(selectedCards);

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
  const baseClass = "c-app";

  return (
    <div className="Container">
      <UserInputForm submitData={handleSubmitData} />
      <h1> Cards available to you displayed are below!</h1>
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
      {totalCredit}
    </div>
  );
};

export default Container;
