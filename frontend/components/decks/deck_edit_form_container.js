import { connect } from 'react-redux';
import DeckEditForm from './deck_edit_form';
import {
  fetchDeck,
  updateDeck,
  createTagging,
  deleteTagging
 } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    deck: state.activeDeck,
    deckId: ownProps.params.deckId,
    activeSubjectId: state.activeSubject.subjectDetail.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getDeck: (deckId) => dispatch(fetchDeck(deckId)),
  updateDeck: (id, cards) => dispatch(updateDeck(id, cards)),
  createTagging: (tagging) => dispatch(createTagging(tagging)),
  deleteTagging: (tagging) => dispatch(deleteTagging(tagging))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckEditForm);
