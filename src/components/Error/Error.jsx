import React from 'react';
import PropTypes from 'prop-types';
import css from './Error.module.css'

export const Error = ({ text }) => {
  return <div className={css.StyledParagraph}>{text}</div>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};
