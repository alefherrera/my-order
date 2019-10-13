import React from 'react';
import { useDispatch } from 'react-redux';
import { notification, item } from '../../slices';
import data from '../../data/apperitizers';
import MenuPage from '../../components/MenuPage';

function ApperitizersPage() {
  const dispatch = useDispatch();
  return (
    <MenuPage
      {...data}
      onItemClick={option => {
        dispatch(item.actions.addItem(option));
        dispatch(
          notification.actions.showNotification({
            message: option.title + ' agregado correctamente!',
          })
        );
      }}
    />
  );
}

export default ApperitizersPage;
