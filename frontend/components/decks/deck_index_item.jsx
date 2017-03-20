import React from 'react';
import { Link } from 'react-router';

const DeckIndexItem = (props) => {
  let { deck, currentUser, admin, deleteDeck } = props;
  let options = <div className="dropdown"></div>;

  if(admin){
    options = (
      <div className="dropdown">
        <button className="dropdown-btn">
          Options
        </button>
        <div className="dropdown-content">
          <div className="deck-link-wrapper">
            <Link
              to="/"
              className="deck-edit-link">
              Edit
            </Link>
          </div>
          <div className="deck-link-wrapper">
            <button
              className="deck-delete-btn"
              onClick={() => deleteDeck(deck.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return(
    <li key={deck.id} className="deck-item-outer">
      <div className="deck-title">
        <h4>{deck.title}</h4>
      </div>
      <div className="deck-card-count">
        {deck.cardCount}
      </div>
      <div className="deck-options">
        <Link
          to={`/study/${deck.id}`}>
          Study
        </Link>
        {options}
      </div>
    </li>
  );
};

export default DeckIndexItem;
