import React from 'react';

const RevealRateButton = (props) => {
  let { toggleFlip, card, flipped, createCardRating, nextCard } = props;
  let inputBar = <div className="reveal-bar" onClick={() => toggleFlip()}>Reveal Answer</div>;

  const rateCard = (rating) => {
    createCardRating(rating);
    nextCard();
    toggleFlip();
  };

  if(card){
    if(flipped){
      let card_id = card.id;
      inputBar = (
        <div className="rating-bar">
          <div
            className="rating-1"
            onClick={() => rateCard({
              rating: 1,
              card_id
            })}>
            1
          </div>
          <div
            className="rating-2"
            onClick={() => rateCard({
              rating: 2,
              card_id
            })}>
            2
          </div>
          <div
            className="rating-3"
            onClick={() => rateCard({
              rating: 3,
              card_id
            })}>
            3
          </div>
          <div
            className="rating-4"
            onClick={() => rateCard({
              rating: 4,
              card_id
            })}>
            4
          </div>
          <div
            className="rating-5"
            onClick={() => rateCard({
              rating: 5,
              card_id
            })}>
            5
          </div>
        </div>
      );
    }
  }

  return(
    <div className="reveal-rate-btn">
      {inputBar}
    </div>
  );
};

export default RevealRateButton;
