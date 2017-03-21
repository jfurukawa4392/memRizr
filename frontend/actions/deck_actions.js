import * as MainAPIUtil from '../util/main_api_util';
import { fetchSubject } from './subject_actions';

export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const RECEIVE_CARD = 'RECEIVE_CARD';

export const createCardRating = (rating) => dispatch => {
  MainAPIUtil.createRating(rating)
             .then(card => dispatch(receiveCard(card)));
};

export const updateDeck = (id, cards) => dispatch => {
  MainAPIUtil.updateDeck(id, cards)
             .then(deck => dispatch(receiveDeck(deck)));
};

export const fetchDeck = (id) => (dispatch) => {
  MainAPIUtil.fetchDeck(id)
             .then(res => dispatch(receiveDeck(res)));
};

export const createDeck = (deck) => (dispatch) => {
  MainAPIUtil.createDeck(deck)
             .then(res => dispatch(fetchSubject(deck.subject_id)));
};

export const deleteDeck = (deckId) => (dispatch) => {
  MainAPIUtil.deleteDeck(deckId)
             .then(deck => (dispatch(fetchSubject(deck.subject_id))));
};

export const removeDeck = (deckId) => ({
  type: REMOVE_DECK,
  deckId
});

export const receiveDeck = (deck) => ({
  type: RECEIVE_DECK,
  deck
});

export const receiveCard = (card) => ({
  type: RECEIVE_CARD,
  card
});
