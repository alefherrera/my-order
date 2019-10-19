import React, { useState } from 'react';
import { MobileStepper, Button, useTheme, Typography } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import data from '../../data/presentation';
import { Link } from '@reach/router';
import ButtonContianer from '../../components/ButtonContainer';

function PrestantationPage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const total = data.paragraphs.length;

  const text = data.paragraphs[activeStep];

  return (
    <React.Fragment>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        {text}
      </Typography>
      {activeStep === total - 1 && (
        <ButtonContianer>
          <Link to="/">
            <Button variant="contained" color="primary">
              {data.button}
            </Button>
          </Link>
        </ButtonContianer>
      )}
      <MobileStepper
        variant="dots"
        steps={total}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === total - 1}
          >
            Adelante
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Atras
          </Button>
        }
      />
    </React.Fragment>
  );
}

export default PrestantationPage;
