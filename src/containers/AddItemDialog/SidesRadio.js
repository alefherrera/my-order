import React from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';

function IngredientsRadio({ title, option }) {
  if (!option) return null;
  if (!option.sides) return null;
  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      <RadioGroup defaultValue={option.sides[0].name}>
        {option.sides.map(({ name }) => (
          <FormControlLabel
            value={name}
            key={name}
            control={<Radio />}
            label={name}
          />
        ))}
      </RadioGroup>
    </React.Fragment>
  );
}

IngredientsRadio.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.any,
};

export default IngredientsRadio;
