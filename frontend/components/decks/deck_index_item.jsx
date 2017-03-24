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
              <i className="fa fa-trash"></i>
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
          <Link
            to={`/study/${deck.id}`}>
            <h4>{deck.title}</h4>
          </Link>
        </div>
        <div className="deck-options">
          <Link
            to={deck.cardCount > 0 ? `/study/${deck.id}` : `/my-subjects`}>
            <i className="fa fa-play-circle-o"></i>
            Study
          </Link>
          {options}
        </div>
      </div>
      <div className="deck-card-count">
        {`${Math.floor(deck.mastery)}% mastery of `}
        {deck.cardCount} Cards
      </div>
    </li>
  );
};

export default DeckIndexItem;
