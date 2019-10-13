import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

function OrderItem({ item }) {
  return (
    <ListItem>
      <ListItemText primary={item.title} secondary={`$${item.price}`} />
    </ListItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.any,
};

export default OrderItem;
