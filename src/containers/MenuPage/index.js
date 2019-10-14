import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { dialog } from '../../slices';
import MenuItem from '../../components/MenuItem';
import { Typography, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import Footer from '../Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PageContainer = styled.div`
  padding-bottom: 56px;
`;

function MenuPage({ title, options }) {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <PageContainer>
        <Typography variant="h4">{title}</Typography>
        <CardContent>
          <Container>
            {options.map(option => (
              <MenuItem
                key={option.title}
                {...option}
                onClick={() => {
                  dispatch(dialog.actions.show(option));
                }}
              />
            ))}
          </Container>
        </CardContent>
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
}

MenuPage.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default MenuPage;
