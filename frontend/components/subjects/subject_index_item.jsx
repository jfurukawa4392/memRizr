import React from 'react';
import { Link } from 'react-router';

const SubjectIndexItem = function({ subject }) {
  return(
    <li className="subject-index-item">
      <Link to={`my-subjects/${subject.id}`}>
        {subject.title}
      </Link>
    </li>
  );
};

export default SubjectIndexItem;
