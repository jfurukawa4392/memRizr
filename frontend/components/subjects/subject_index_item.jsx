import React from 'react';
import { Link } from 'react-router';

const SubjectIndexItem = function({ subject }) {
  return(
    <Link to={`my-subjects/${subject.id}`}>
      <li className="subject-index-item">
        {subject.title}
      </li>
    </Link>
  );
};

export default SubjectIndexItem;
