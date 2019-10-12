import React from 'react';
import { Snackbar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { notification } from '../../slices';
import { notificationSelector } from '../../selectors';

function SnackbarContainer() {
  const { message, open } = useSelector(notificationSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <Snackbar
        message={message}
        open={open}
        autoHideDuration={3000}
        onClose={() => dispatch(notification.actions.closeNotification())}
      />
    </div>
  );
}

export default SnackbarContainer;
