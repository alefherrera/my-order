import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { dialog } from '../../slices';
import MenuItem from '../../components/MenuItem';
import { Card, Typography } from '@material-ui/core';
import Footer from '../Footer';

function MenuPage({ title, options }) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Typography variant="h4">{title}</Typography>
      {options.map(option => (
        <MenuItem
          key={option.title}
          {...option}
          onClick={() => {
            dispatch(dialog.actions.show(option));
          }}
        />
      ))}
      <Footer />
    </Card>
  );
}

MenuPage.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default MenuPage;
