import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import React from 'react';
import NavBarContainer from '../navbar_container';
import DeckTags from './deck_tags';
import { Link } from 'react-router';

class DeckEditForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      errors: [],
      cards: [],
      confirmSave: false
    };

    this.questionChange = this.questionChange.bind(this);
    this.answerChange = this.answerChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addCardForm = this.addCardForm.bind(this);
    this.processDeck = this.processDeck.bind(this);
  }

  componentWillMount(){
    this.props.getDeck(this.props.params.deckId);
  }

  componentWillReceiveProps(nextProps){
    if(!isEqual(this.state.cards, nextProps.deck.cards ||
       !isEqual(this.props.deck.tags, nextProps.deck.tags))){
      this.setState({
        cards: nextProps.deck.cards,
        confirmSave: false});
    }
  }

  questionChange(idx){
    return (e) => {
      e.preventDefault();
      let newCards = this.state.cards.slice();
      newCards[idx].question = e.target.value;
      this.setState({ cards: newCards });
    };
  }

  answerChange(idx){
    return (e) => {
      e.preventDefault();
      let newCards = this.state.cards.slice();
      newCards[idx].answer = e.target.value;
      this.setState({ cards: newCards });
    };
  }

  handleDelete(idx){
    return (e) => {
      e.preventDefault();
      let newCards = this.state.cards.slice();
      newCards.splice(idx, 1);
      const newState = merge({}, this.state);
      newState.cards = newCards;
      this.setState(newState);
    };
  }

  addCardForm(){
    let newState = merge({}, this.state);
    newState.cards.push({question: "", answer: ""});
    this.setState(newState);
  }

  processDeck(){
    let cards = [];
    let newState;
    let { deckId, updateDeck } = this.props;

    for (var i = 0; i < this.state.cards.length; i++) {

      if(this.state.cards[i].question.trim() === ""
        || this.state.cards[i].answer.trim() === ""){
        newState = merge({}, this.state);
        newState.errors.push("Question and Answer must both be filled out");
        this.setState(newState);
        return;
      }

      cards.push(this.state.cards[i]);
    }
    updateDeck({
      id: this.props.deckId,
      cards });
    this.setState({cards: cards, errors: [], confirmSave: true});
  }

  render(){
    let { title, tags, activeSubjectId } = this.props.deck;
    let saveConfirmation, backToSubject;
    let cardsRows = <tr>loading data</tr>;
    cardsRows = this.state.cards.map((card, idx) => {
      return(
        <tr key={idx}>
          <td className="card-number">{idx + 1}</td>
          <td>
            <textarea value={card.question} onChange={this.questionChange(idx)}/>
          </td>
          <td>
            <textarea value={card.answer} onChange={this.answerChange(idx)}/>
          </td>
          <td className="delete-icon">
            <button className='card-delete-btn' onClick={this.handleDelete(idx)}>
              <i className="fa fa-times fa-fw"></i>
            </button>
          </td>
        </tr>
      );
    });

    if(this.state.confirmSave){
      saveConfirmation = <h4>Cards Saved</h4>;
    }

    if(activeSubjectId){
      backToSubject =
      <Link
        className="back-link"
        to={`my-subjects/${activeSubjectId}`}>
        <i className="fa fa-chevron-left"></i>
        Back
      </Link>;
    } else {
      backToSubject =
      <Link
        className="back-link"
        to={`my-subjects/`}>
        <i className="fa fa-chevron-left"></i>
        Back
      </Link>;
    }

    return(
      <main className="deck-edit-view-outer">
        <NavBarContainer />
        <content className="cards-list-table-wrapper">
          <h1>Edit Deck: {title}</h1>
          {backToSubject}
          <div>{this.state.errors}</div>
          <table className="cards-list-table-outer">
            <thead className="cards-list-table-head">
              <tr>
                <th>#</th>
                <th>Question</th>
                <th colSpan='2'>Answer</th>
              </tr>
            </thead>
            <tbody className="cards-list-table-body">
              {cardsRows}
            </tbody>
          </table>
          <div>
            <button onClick={() => this.addCardForm()}>
              New Card
            </button>
            <button onClick={() => this.processDeck()}>
              Save Cards
            </button>
          </div>
          {saveConfirmation}
          <DeckTags
            createTagging={this.props.createTagging}
            deleteTagging={this.props.deleteTagging}
            tags={tags}
            deckId={this.props.deckId}/>
        </content>
      </main>
    );
  }
}

export default DeckEditForm;
