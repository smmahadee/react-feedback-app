import PropTypes from 'prop-types';

export default function Test({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  );
}

Test.defaultProps = {
  text: 'Facebook UI',
  bgColor: 'rgba(0,0,0,.4)',
  textColor: '#ff6a95',
};

Test.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
