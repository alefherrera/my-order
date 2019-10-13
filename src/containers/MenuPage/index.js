import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { item } from '../../slices';
import MenuItem from '../../components/MenuItem';
import { Card, Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';

function MenuPage({ title, options }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Card>
      <Typography variant="h4">{title}</Typography>
      {options.map(option => (
        <MenuItem
          key={option.title}
          {...option}
          onClick={() => {
            dispatch(item.actions.addItem(option));
            enqueueSnackbar(option.title + ' agregado correctamente!', {
              variant: 'success',
            });
          }}
        />
      ))}
    </Card>
  );
}

MenuPage.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default MenuPage;
