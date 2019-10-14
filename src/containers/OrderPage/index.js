import React from 'react';
import {
  Card,
  Typography,
  List,
  CardContent,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import data from '../../data/order';
import { preorderSelector } from '../../selectors';
import OrderItem from '../../components/OrderItem';

function renderItems(items) {
  if (!items) return null;
  return items.map(item => (
    <OrderItem key={JSON.stringify(item)} item={item} />
  ));
}

function OrderPage() {
  const order = useSelector(preorderSelector);
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{data.title}</Typography>
        <List>{renderItems(order.items)}</List>
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="h3"> {`$${order.total}`}</Typography>
        </ListItem>
      </CardContent>
    </Card>
  );
}

export default OrderPage;
