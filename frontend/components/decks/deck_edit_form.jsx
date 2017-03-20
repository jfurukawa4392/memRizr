import merge from 'lodash/merge';
import isEqual from 'lodash/isEqual';
import React from 'react';
import NavBarContainer from '../navbar_container';

class DeckEditForm extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.deck.cards);
    this.state = {
      errors: [],
      cards: []
    };

    this.questionChange = this.questionChange.bind(this);
    this.answerChange = this.answerChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount(){
    this.props.getDeck(this.props.params.deckId);
  }

  componentWillReceiveProps(nextProps){
    if(isEqual(this.props.deck.cards, nextProps.deck.cards)){
      this.setState({cards: nextProps.deck.cards});
    }
  }

  questionChange(idx){
    return function(e) {
      e.preventDefault();
      let newCards = this.props.cards.slice();
      newCards[idx].question = e.target.value;
      this.setState({ cards: newCards });
    };
  }

  answerChange(idx){
    return function(e) {
      e.preventDefault();
      let newCards = this.props.cards.slice();
      newCards[idx].answer =  e.target.value;
      this.setState({ cards: newCards });
    };
  }

  handleDelete(idx){
    return (e) => {
      e.preventDefault();
      let newCards = this.props.cards.slice();
      newCards.splice(idx, 1);
      const newState = merge({}, this.state);
      newState.cards = newCards;
      this.setState(newState);
    };
  }

  render(){
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

    return(
      <main className="deck-edit-view-outer">
        <NavBarContainer />
        <content className="cards-list-table-wrapper">
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
        </content>
      </main>
    );
  }
}

export default DeckEditForm;
