import React from 'react';
import { Link } from 'react-router';

const DeckIndexItem = (props) => {
  let { deck } = props;

  return(
    <li key={deck.id} className="deck-item-outer">
      <div className="deck-title">
        <h4>{deck.title}</h4>
      </div>
      <div className="deck-card-count">
        {deck.cardCount}
      </div>
      <div>
        <button
          className="deck-study-button"
          onClick={(e) => console.log(e)}>
          Study
        </button>
      </div>
    </li>
  );
};

export default DeckIndexItem;
