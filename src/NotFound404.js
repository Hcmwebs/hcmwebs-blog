import React from 'react';
const { Link } = require('react-router-dom');

const NotFound404 = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>That Page cannot be found</p>
      <Link to='/'> Back to the homepage...</Link>
    </div>
  );
};

export default NotFound404;
