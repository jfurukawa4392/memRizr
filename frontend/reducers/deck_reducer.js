import {
  RECEIVE_DECK,
  RECEIVE_CARD
} from '../actions/deck_actions';
import merge from 'lodash/merge';

const _nullDeck = {
  id: null,
  title: "",
  cards: [],
  cardCount: 0,
};

const DeckReducer = (state = _nullDeck, action) => {
  let newState;
  switch (action.type){
    case(RECEIVE_DECK):
      newState = action.deck;
      return merge({}, state, newState);
    case(RECEIVE_CARD):
      newState = merge({}, state);
      console.log(action.card);
      newState.cards = newState.cards.map((card) => {
        if(card.id === action.card.id){
          return action.card;
        } else {
          return card;
        }
      });
      return newState;
    default:
      return state;
    }
  };

export default DeckReducer;
