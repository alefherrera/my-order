import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

function MenuItem({ title, description, price, stars, image }) {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardMedia
        style={{ height: 200 }}
        image={`http://raw.githubusercontent.com/alefherrera/my-order/develop/src/assets/${image}`}
        title={title}
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {`$ ${price}.00`}
        </Typography>
        {stars && <Rating value={stars} readOnly />}
      </CardContent>
    </Card>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired
};

export default MenuItem;
