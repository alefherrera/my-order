import React from 'react';
import PropTypes from 'prop-types';

function OrderItem({ item }) {
  return (
    <div>
      {item.title}
      {item.price}
    </div>
  );
}

OrderItem.propTypes = {
  item: PropTypes.any,
};

export default OrderItem;
