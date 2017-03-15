import { connect } from 'react-redux';
import SubjectIndex from './subject_index';


const mapStateToProps = (state, ownProps) => {
  /*
  my-subjects or subjects route to determine back end request to

  */
  let subjectViewType = ownProps.location.pathname.slice(1);
  let ajaxCall = (subjectViewType === 'my-subjects') ? 'hi' : 'hi';
  return {
    stuff: 'hi'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
