import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import { Card, Typography } from '@material-ui/core';

function MenuPage({ title, options, onItemClick }) {
  return (
    <Card>
      <Typography variant="h4">{title}</Typography>
      {options.map(option => (
        <MenuItem
          key={option.title}
          onClick={() => onItemClick(option)}
          {...option}
        />
      ))}
    </Card>
  );
}

MenuPage.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default MenuPage;
