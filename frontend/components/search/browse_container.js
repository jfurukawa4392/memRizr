import { connect } from 'react-redux';
import {
  fetchSubjects,
} from '../../actions/subject_actions';

const mapStateToProps = (state) => ({
  subjects: state.subjects,

});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjects: () => dispatch(fetchSubjects()),
  
});
