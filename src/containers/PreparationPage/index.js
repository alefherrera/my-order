import React from 'react';
import data from '../../data/preparation';
import ButtonContainer from '../../components/ButtonContainer';
import { Link, Button, Typography } from '@material-ui/core';

const getUrl = image =>
  //eslint-disable-next-line
  process.env.NODE_ENV === 'development'
    ? `/assets/${image}`
    : `/my-order/assets/${image}`;

function PreparationPage() {
  return (
    <div>
      <ButtonContainer>
        <Typography gutterBottom variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
        <img alt="waiting" src={getUrl(data.image)} />
        <Link href={data.link}>
          <Button variant="contained" color="primary">
            {data.button}
          </Button>
        </Link>
      </ButtonContainer>
    </div>
  );
}

export default PreparationPage;
