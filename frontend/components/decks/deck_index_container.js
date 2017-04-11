import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import {
  deleteDeck
} from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);
