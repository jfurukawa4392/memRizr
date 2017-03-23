import React from 'react';
import { Link } from 'react-router';
import CurrentLearners from './current_learners';
import DeckIndex from '../decks/deck_index';

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
      if(!nextProps.params.subjectId && this.props.subjects){
        this.props.fetchSubject(Object.keys(this.props.subjects)[0]);
      } else{
        this.props.fetchSubject(nextProps.params.subjectId);
      }
    }
  }

  toggleFollow(){
    let { userFollows, id } = this.props.subjectDetail;
    if(userFollows){
      this.props.deleteFollow(id);
    } else {
      this.props.createFollow(id);
    }
  }

  render() {
    const { subjectDetail, decks, createDeck, deleteDeck, currentUser } = this.props;
    let deckList = <div className="no-decks-found">No Decks Found</div>;
    let subjectTitle;
    let followButton = <div></div>;
    let currentLearners = (<div className="no-learners-div">No Current Learners</div>);

    if(subjectDetail){
      deckList = <DeckIndex
        subjectDetail={subjectDetail}
        decks={decks}
        createDeck={createDeck}
        deleteDeck={deleteDeck}
        currentUser={currentUser}/>;
      subjectTitle = subjectDetail.title;
      currentLearners = <CurrentLearners subjectDetail={subjectDetail}/>;
      followButton = subjectDetail.userFollows ?
      (<button
        onClick={() => this.toggleFollow()}
        className="unfollow-subject-btn">
        Unfollow
      </button>) :
      (<button
        onClick={() => this.toggleFollow()}
        className="follow-subject-btn">
        Follow
      </button>);
    } else {
      deckList = <div className="no-decks-found">No Decks Found</div>;
    }

    return(
      <article className="subject-detail-outer">
        <div className="subject-detail-inner">
          <header className="subject-title-header">
            {subjectTitle}
            {followButton}
          </header>
          <section className="deck-list-container">
            {deckList}
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
