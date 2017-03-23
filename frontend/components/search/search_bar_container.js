import { connect } from 'react-redux';
import SearchBar from './search_bar';
import fetchResults from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    // subjects: localSubjects
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFastResults: (query) => dispatch(fetchResults(query, 1)),
  fetchResults: (query) => dispatch(fetchResults(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
