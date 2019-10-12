import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';
import { Card, Typography } from '@material-ui/core';

function MenuPage({ title, options }) {
  return (
    <Card>
      <Typography variant="h4">{title}</Typography>
      {options.map(option => (
        <MenuItem key={option.title} {...option} />
      ))}
    </Card>
  );
}

MenuPage.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default MenuPage;
