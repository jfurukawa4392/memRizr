import {
  RECEIVE_DECK
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
    default:
      return state;
    }
  };

export default DeckReducer;
