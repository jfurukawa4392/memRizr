import { connect } from 'react-redux';
import DeckEditForm from './deck_edit_form';
import {
  fetchDeck,
  updateDeck
 } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    deck: state.activeDeck,
    deckId: ownProps.params.deckId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getDeck: (deckId) => dispatch(fetchDeck(deckId)),
  updateDeck: (id, cards) => dispatch(updateDeck(id, cards)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckEditForm);
