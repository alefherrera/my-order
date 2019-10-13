import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import data from '../../data/order';
import { orderSelector } from '../../selectors';
import OrderItem from '../../components/OrderItem';

function renderItems(items) {
  if (!items) return null;
  return items.map(item => <OrderItem key={item.title} item={item} />);
}

function OrderPage() {
  const order = useSelector(orderSelector);
  return (
    <Card>
      <Typography variant="h4">{data.title}</Typography>
      {renderItems(order.items)}
      {order.total}
    </Card>
  );
}

export default OrderPage;
