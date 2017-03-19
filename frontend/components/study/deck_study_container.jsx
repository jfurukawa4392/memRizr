import { connect } from 'react-redux';
import DeckStudy from './deck_study';
import { createCardRating } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  deckId: ownProps.params.deckId
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckStudy);
