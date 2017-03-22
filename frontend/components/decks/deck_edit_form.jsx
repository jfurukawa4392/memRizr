import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import React from 'react';
import NavBarContainer from '../navbar_container';

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
    if(!isEqual(this.state.cards, nextProps.deck.cards)){
      this.setState({cards: nextProps.deck.cards, confirmSave: false});
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
    console.log("cards validated, saving now");
    updateDeck({
      id: this.props.deckId,
      cards });
    this.setState({cards: cards, errors: [], confirmSave: true});
  }

  render(){
    let { title } = this.props.deck;
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

    let saveConfirmation;
    if(this.state.confirmSave){
      saveConfirmation = <h4>Cards Saved</h4>;
    }

    return(
      <main className="deck-edit-view-outer">
        <NavBarContainer />
        <content className="cards-list-table-wrapper">
          <h1>Edit Deck: {title}</h1>
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
              Add Card
            </button>
            <button onClick={() => this.processDeck()}>
              Save Changes
            </button>
          </div>
          {saveConfirmation}
        </content>
      </main>
    );
  }
}

export default DeckEditForm;
