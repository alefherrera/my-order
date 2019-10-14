import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import join from 'lodash/join';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';

const renderIngredients = item => {
  if (!item.ingredients) return null;
  const ingredientsNames = item.ingredients
    .filter(x => !x.checked)
    .map(x => x.name);
  if (isEmpty(ingredientsNames)) return null;
  return `Sin ${join(ingredientsNames)}`;
};

const renderSide = item => {
  if (!item.sides) return null;
  const side = item.sides.filter(x => x.checked).map(x => x.name);
  return `Acompañado de: ${head(side)};`;
};

const renderChoice = item => {
  if (!item.choices) return null;
  const choice = item.choices.filter(x => x.checked).map(x => x.name);
  return `${head(choice)};`;
};

const renderSecondary = item => {
  const texts = [renderSide(item), renderIngredients(item), renderChoice(item)];
  return join(texts, ' ');
};

function OrderItem({ item }) {
  return (
    <ListItem>
      <ListItemText primary={item.title} secondary={renderSecondary(item)} />
      <Typography gutterBottom variant="h5" component="h2">
        {`$${item.price}`}
      </Typography>
    </ListItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.any,
};

export default OrderItem;
