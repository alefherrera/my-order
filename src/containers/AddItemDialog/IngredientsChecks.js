import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@material-ui/core';

function IngredientsChecks({ title, option, onChange }) {
  if (!option) return null;
  if (!option.ingredients) return null;
  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      <FormGroup>
        {option.ingredients.map(({ name, checked }) => (
          <FormControlLabel
            key={name}
            value={name}
            checked={checked}
            onChange={() => onChange(name)}
            control={<Checkbox />}
            label={name}
          />
        ))}
      </FormGroup>
    </React.Fragment>
  );
}

IngredientsChecks.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default IngredientsChecks;
