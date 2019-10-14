import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { dialog } from '../../slices';
import MenuItem from '../../components/MenuItem';
import { Typography, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import template from 'lodash/template';
import isEmpty from 'lodash/isEmpty';
import { useSnackbar } from 'notistack';
import Footer from '../Footer';
import data from '../../data/dialog';
import { preorder } from '../../slices';

const notification = template(data.notification);

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
  const { enqueueSnackbar } = useSnackbar();
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
                  if (isEmpty(option.sides) && isEmpty(option.ingredients)) {
                    dispatch(preorder.actions.addItem(option));
                    enqueueSnackbar(notification(option), {
                      variant: 'success',
                    });
                  } else {
                    dispatch(dialog.actions.show(option));
                  }
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
