import React from 'react';
import { Link } from 'react-router';
import CurrentLearners from './current_learners';

class SubjectDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(this.props.params.subjectId){
      this.props.fetchSubject(this.props.params.subjectId);
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.subjectId !== nextProps.params.subjectId){
      this.props.fetchSubject(nextProps.params.subjectId);
    }
  }

  render() {
    const { subjectDetail, decks } = this.props;
    let deckList, subjectTitle;
    let currentLearners = (<div className="no-learners-div">No Current Learners</div>);

    if(decks.length > 0 && subjectDetail){
      deckList = decks.map((deck, idx) => {
        return(
          <li key={deck.id} className="deck-item-li">
            <div className="deck-item-inner">
              <h4 className="deck-title">{deck.title}</h4>
              <button
                className="deck-study-button"
                onClick={(e) => console.log(e)}>
                Study
              </button>
            </div>
            <div className="deck-card-count">
              {deck.cardCount}
            </div>
          </li>
        );
      });
      subjectTitle = subjectDetail.title;
      currentLearners = <CurrentLearners subjectDetail={subjectDetail}/>;
    } else {
      deckList = <div className="no-decks-found">No Decks Found</div>;
    }

    return(
      <article className="subject-detail-outer">
        <div className="subject-detail-inner">
          <header className="subject-title-header">
            {subjectTitle}
          </header>
          <section className="deck-list-container">
            <ul className="deck-list-ul">
              {deckList}
            </ul>
          </section>
        </div>
        <div className="current-learners-outer">
          <aside className="current-learners">
            {currentLearners}
          </aside>
        </div>
      </article>
    );
  }

}

export default SubjectDetail;
