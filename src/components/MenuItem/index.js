import React from "react";
import PropTypes from "prop-types";

function MenuItem({ title, description, image }) {
  return (
    <React.Fragment>
      {title}
      {description}
      <img src={`assets/${image}`} />
    </React.Fragment>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default MenuItem;
