import React from 'react';

class DeckForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      subject_id: this.props.subjectId
    };
  }

  update(e){
    this.setState({
      title: e.target.value
    });
  }

  submitDeck(){
    this.props.createDeck(this.state);
    this.setState({
      title: ""
    });
  }

  render(){
    let { cancelForm } = this.props;
    return(

      <div className="new-deck-form-div">
        <h3>New Deck</h3>
        <label>
          Deck Name:
          <input
            className="deck-title-input"
            type="text"
            onChange={(e) => this.update(e)}
            />
        </label>
        <div className="deck-action-btns">
          <button
            className="new-deck-submit-btn"
            onClick={() => this.submitDeck()}>
            Create Deck
          </button>
          <button
            className="cancel-new-deck-btn"
            onClick={() => cancelForm()}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default DeckForm;
