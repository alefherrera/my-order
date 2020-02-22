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
      <ButtonContainer top={10}>
        <Typography gutterBottom variant="h5" component="h2">
          {data.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </ButtonContainer>
      <ButtonContainer top={5}>
        <img alt="waiting" src={getUrl(data.image)} />
      </ButtonContainer>
      {data.show && (
        <ButtonContainer top={10}>
          <Link href={data.link}>
            <Button variant="contained" color="primary">
              {data.button}
            </Button>
          </Link>
        </ButtonContainer>
      )}
    </div>
  );
}

export default PreparationPage;
