import React from 'react';

const CardFace = (props) => {
  let { toggleFlip, flipped, card } = props;
  let cardFace;

  if(card){
    if(flipped){
      cardFace = <div onClick={() => toggleFlip()} className="card">{card.answer}</div>;
    } else {
      cardFace = <div onClick={() => toggleFlip()} className="card">{card.question}</div>;
    }
  }

  return(
    <main className="card-wrapper">
      {cardFace}
    </main>
  );
};

export default CardFace;
