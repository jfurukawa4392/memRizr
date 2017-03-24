import React from 'react';
import { Link, withRouter } from 'react-router';
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

  componentWillUnmount(){
    // if(this.props.location.pathname.match(/\/my-subjects/)){
    //   this.props.clearSubject();
    // }
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
    let subjectTitle = (
      <div className="no-subjects-message">
        <h1>
          No Subjects in your Library
        </h1>
        <Link
          to="/browse">
          Click here to browse all subjects
        </Link>
      </div>
    );
    let followButton = <div></div>;
    let currentLearners = (<div className="no-learners-div">No Current Learners</div>);

    if(subjectDetail){
      deckList = <DeckIndex
        subjectDetail={subjectDetail}
        decks={decks}
        createDeck={createDeck}
        deleteDeck={deleteDeck}
        currentUser={currentUser}/>;
      currentLearners = <CurrentLearners subjectDetail={subjectDetail}/>;
      if(subjectDetail.title){
        subjectTitle = subjectDetail.title;
        if(currentUser){
          followButton = subjectDetail.userFollows ?
          (<button
            onClick={() => this.toggleFollow()}
            className="unfollow-subject-btn">
            Unfollow
          </button>) :
          (<button
            onClick={() => this.toggleFollow()}
            className="follow-subject-btn">
            <i className="fa fa-plus-square-o"></i>
            Follow
          </button>);
        }
      }
    } else {
      deckList = <div className="no-decks-found">No Decks Found</div>;
    }

    return(
      <article className="subject-detail-outer">
        <div className="subject-detail-inner">
          <header className="subject-title-header">
            <h1>{subjectTitle}</h1>
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
