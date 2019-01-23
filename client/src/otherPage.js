import { Link } from 'react-router-dom';
import React from 'react';

export default () => {
  return (
    <div>
      I'm some other page!
      <Link to='/'>Go Back</Link>
    </div>
  );
};
