import React from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';

function IngredientsRadio({ title, option, onChange }) {
  if (!option) return null;
  if (!option.sides) return null;
  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      <RadioGroup>
        {option.sides.map(({ name, checked }) => (
          <FormControlLabel
            key={name}
            value={name}
            checked={checked}
            onChange={() => onChange(name)}
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
  onChange: PropTypes.func.isRequired,
};

export default IngredientsRadio;
