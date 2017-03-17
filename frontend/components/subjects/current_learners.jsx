import React from 'react';

//pass subjectDetail.current_learners as props
const CurrentLearners = ( { subjectDetail } ) => {
  let learnersList = <div>Please wait</div>;
  if(subjectDetail.currentLearners){
    learnersList = subjectDetail.currentLearners.map((user) => {

      return(
        <li key={user.id}>
          <a href="#">
            { user.username }
          </a>
        </li>
      );
    });
  }

  return(
    <ul className="learners-ul">
      <h4>Current Learners</h4>
      { learnersList }
    </ul>
  );
};

export default CurrentLearners;
