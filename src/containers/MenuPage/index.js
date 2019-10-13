import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { notification, item } from '../../slices';
import MenuItem from '../../components/MenuItem';
import { Card, Typography } from '@material-ui/core';

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
            dispatch(item.actions.addItem(option));
            dispatch(
              notification.actions.showNotification({
                message: option.title + ' agregado correctamente!',
              })
            );
          }}
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
