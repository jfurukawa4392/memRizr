import React from 'react';

const SubjectIndexItem = function({ subject, clickHandler }) {
  console.log(subject);
  return(
    <li className="subject-index-item">
      <button
        className="getSubject-btn"
        onClick={() => clickHandler(subject.id)}>
        <h4 className="subject-list-item-title">
          {subject.title}
        </h4>
      </button>
    </li>
  );
};

export default SubjectIndexItem;
