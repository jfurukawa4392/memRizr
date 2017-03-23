import React from 'react';
import { Link } from 'react-router';
import * as _ from 'lodash';

const SubjectsList = (props) => {
  let { subjects } = props;
  let subjectList = <h1 className="no-subjects">No subjects to display</h1>;

  if(!_.isEmpty(subjects)){
    subjectList = Object.keys(subjects).map((id, index) => {
      return(
        <Link
          key={index}
          to={`/subjects/${id}`}
          className="subject-list-item">
          <li>
            {subjects[id].title}
          </li>
        </Link>
      );
    });
  }

  return(
    <article
      className="subject-list-outer">
      <div
        className="subject-list-header">
        <h1>Browse Subjects</h1>
      </div>
      <ul
        className="subject-list">
        {subjectList}
      </ul>
    </article>
  );
};

export default SubjectsList;
