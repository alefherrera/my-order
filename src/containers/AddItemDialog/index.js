import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { dialogSelector } from '../../selectors';
import { preorder, dialog } from '../../slices';
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
  const addItem = option => dispatch(preorder.actions.addItem(option));
  const getTitle = option => (option ? title(option) : '');
  const ingredientChange = ingredient =>
    dispatch(dialog.actions.ingredientChange(ingredient));
  const selectSide = side => dispatch(dialog.actions.selectSide(side));

  if (!open) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{getTitle(option)}</DialogTitle>
      <DialogContent dividers>
        <SidesRadio title={data.sides} option={option} onChange={selectSide} />
        <IngredientsChecks
          title={data.ingredients}
          option={option}
          onChange={ingredientChange}
        />
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
          {data.accept}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleClose();
          }}
        >
          {data.cancel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItemDialog;
