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
import { preorder, dialog } from '../../slices';

function renderItems(items, onDelete, onEdit) {
  if (!items) return null;
  return items.map(item => (
    <OrderItem
      key={JSON.stringify(item)}
      item={item}
      onDeleteClick={onDelete}
      onEditClick={onEdit}
    />
  ));
}

function OrderPage() {
  const order = useSelector(preorderSelector);
  const dispatch = useDispatch();
  const onDelete = item => dispatch(preorder.actions.removeItem(item));
  const onEdit = item => dispatch(dialog.actions.show(item));
  return (
    <React.Fragment>
      <Typography variant="h4">{data.title}</Typography>
      <List>{renderItems(order.items, onDelete, onEdit)}</List>
      <ListItem>
        <ListItemText
          primary="Total"
          primaryTypographyProps={{ variant: 'h3' }}
        />
        <Typography variant="h3"> {`$${order.total}`}</Typography>
      </ListItem>
      <ButtonContianer top={50}>
        <Link to="/preparation">
          <Button variant="contained" color="primary">
            {data.finish}
          </Button>
        </Link>
      </ButtonContianer>
    </React.Fragment>
  );
}

export default OrderPage;
