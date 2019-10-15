import React from 'react';
import PropTypes from 'prop-types';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';

function ChoicesRadio({ title, option, onChange }) {
  if (!option) return null;
  if (!option.choices) return null;
  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      <RadioGroup>
        {option.choices.map(({ name, checked }) => (
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

ChoicesRadio.propTypes = {
  title: PropTypes.string.isRequired,
  option: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default ChoicesRadio;
