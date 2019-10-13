import React from 'react';
import { useDispatch } from 'react-redux';
import { notification, item } from '../../slices';
import data from '../../data/desserts';
import MenuPage from '../../components/MenuPage';

function DessertsPage() {
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

export default DessertsPage;
