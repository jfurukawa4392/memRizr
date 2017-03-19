import * as APIUtil from '../util/main_api_util';
import { fetchSubjectDetail } from './subject_actions';

export const RECEIVE_DECK = 'RECEIVE_DECK';

export const fetchDeck = (id) => (dispatch) => {

};

export const createDeck = (deck) => (dispatch) => {
  APIUtil.createDeck(deck)
         .then(res => dispatch(fetchSubjectDetail(deck.subjectId)));
};
