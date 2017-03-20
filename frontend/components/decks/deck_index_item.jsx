import React from 'react';
import { Link } from 'react-router';

const DeckIndexItem = (props) => {
  let { deck, currentUser, admin, deleteDeck } = props;
  let options = <div className="dropdown"></div>;

  if(admin){
    options = (
      <div className="dropdown">
        <button className="dropdown-btn">
          <i className="fa fa-cog fa-lg"></i>
        </button>
        <div className="dropdown-content">
          <div className="deck-link-wrapper">
            <Link
              to={`/deck/${deck.id}/edit`}
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
      <div className="deck-item-inner">
        <div className="deck-title">
          <h4>{deck.title}</h4>
        </div>
        <div className="deck-options">
          <Link
            to={`/study/${deck.id}`}>
            <i className="fa fa-play-circle-o"></i>
            Study
          </Link>
          {options}
        </div>
      </div>
      <div className="deck-card-count">
        {deck.cardCount} Cards
      </div>
    </li>
  );
};

export default DeckIndexItem;
