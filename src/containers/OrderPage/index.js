import React from 'react';
import {
  Card,
  Typography,
  List,
  CardContent,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from '@reach/router';
import data from '../../data/order';
import { preorderSelector } from '../../selectors';
import OrderItem from '../../components/OrderItem';
import ButtonContianer from '../../components/ButtonContainer';
import { useDispatch } from 'react-redux';
import { preorder } from '../../slices';

function renderItems(items, onDelete) {
  if (!items) return null;
  return items.map(item => (
    <OrderItem
      key={JSON.stringify(item)}
      item={item}
      onDeleteClick={onDelete}
    />
  ));
}

function OrderPage() {
  const order = useSelector(preorderSelector);
  const dispatch = useDispatch();
  const onDelete = item => dispatch(preorder.actions.removeItem(item));
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{data.title}</Typography>
        <List>{renderItems(order.items, onDelete)}</List>
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="h3"> {`$${order.total}`}</Typography>
        </ListItem>
        <ButtonContianer top={50}>
          <Link to="/preparation">
            <Button variant="contained" color="primary">
              {data.finish}
            </Button>
          </Link>
        </ButtonContianer>
      </CardContent>
    </Card>
  );
}

export default OrderPage;
