import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { dialogSelector } from '../../selectors';
import { item, dialog } from '../../slices';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
import template from 'lodash/template';
import SidesRadio from './SidesRadio';
import IngredientsChecks from './IngredientsChecks';
import data from '../../data/dialog';

const title = template(data.title);
const notification = template(data.notification);

function AddItemDialog() {
  const { open, option } = useSelector(dialogSelector);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleClose = () => dispatch(dialog.actions.close());
  const addItem = option => dispatch(item.actions.addItem(option));
  const getTitle = option => (option ? title(option) : '');

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{getTitle(option)}</DialogTitle>
      <DialogContent dividers>
        <SidesRadio title={data.sides} option={option} />
        <IngredientsChecks title={data.ingredients} option={option} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addItem(option);
            handleClose();
            enqueueSnackbar(notification(option), {
              variant: 'success',
            });
          }}
        >
          Aceptar
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleClose();
          }}
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItemDialog;
