import React from 'react';
import { Card, Typography, List, CardContent } from '@material-ui/core';
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
      <CardContent>
        <Typography variant="h4">{data.title}</Typography>
        <List>{renderItems(order.items)}</List>
        <Typography variant="h3"> {`$${order.total}`}</Typography>
      </CardContent>
    </Card>
  );
}

export default OrderPage;
