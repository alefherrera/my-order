import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import join from 'lodash/join';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const ChoiceContainer = styled.div`
  font-weight: bold;
`;

const renderIngredients = item => {
  if (!item.ingredients) return null;
  const ingredientsNames = item.ingredients
    .filter(x => !x.checked)
    .map(x => x.name);
  if (isEmpty(ingredientsNames)) return null;
  return `Sin ${join(ingredientsNames)}.`;
};

const renderSide = item => {
  if (!item.sides) return null;
  const side = item.sides.filter(x => x.checked).map(x => x.name);
  return `Acompañado de: ${head(side)}.`;
};

const renderChoice = item => {
  if (!item.choices) return null;
  const choice = item.choices.filter(x => x.checked).map(x => x.name);
  return `${head(choice)}`;
};

const renderSecondary = item => {
  const texts = [renderSide(item), renderIngredients(item)];
  return (
    <div>
      <ChoiceContainer>{renderChoice(item)}</ChoiceContainer>
      {join(texts, ' ')}
    </div>
  );
};

function OrderItem({ item, onDeleteClick, onEditClick }) {
  return (
    <ListItem>
      <ListItemText primary={item.title} secondary={renderSecondary(item)} />
      <ListItemSecondaryAction>
        <Typography variant="h5" component="span">
          {`$${item.price}`}
        </Typography>
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => {
            onEditClick(item);
          }}
        >
          <EditRoundedIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            onDeleteClick(item);
          }}
        >
          <DeleteRoundedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.any,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default OrderItem;
