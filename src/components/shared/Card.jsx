import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, reverse }) {
  const reverseStyles = {
    backgroundColor: 'rgba(0,0,0,.4)',
    color: '#fff',
  };
  
  return (
    <div className='card' style={reverse ? reverseStyles : null}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
