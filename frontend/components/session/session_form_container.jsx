import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = (ownProps.formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    formType: ownProps.formType
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
