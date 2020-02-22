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
  TextField,
} from '@material-ui/core';
import template from 'lodash/template';
import SidesRadio from './SidesRadio';
import IngredientsChecks from './IngredientsChecks';
import data from '../../data/dialog';
import ChoicesRadio from './ChoicesRadio';

const title = template(data.title);
const notification = template(data.notification);

function AddItemDialog() {
  const { open, option, comment } = useSelector(dialogSelector);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleClose = () => dispatch(dialog.actions.close());
  const addItem = option => dispatch(preorder.actions.addItem(option));
  const getTitle = option => (option ? title(option) : '');
  const ingredientChange = ingredient =>
    dispatch(dialog.actions.ingredientChange(ingredient));
  const commentChange = event =>
    dispatch(dialog.actions.commentChange(event.target.value));
  const selectSide = side => dispatch(dialog.actions.selectSide(side));
  const selectChoice = choice => dispatch(dialog.actions.selectChoice(choice));

  if (!open) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{getTitle(option)}</DialogTitle>
      <DialogContent dividers>
        <SidesRadio title={data.sides} option={option} onChange={selectSide} />
        <ChoicesRadio
          title={data.choices}
          option={option}
          onChange={selectChoice}
        />
        <IngredientsChecks
          title={data.ingredients}
          option={option}
          onChange={ingredientChange}
        />
        <TextField
          fullWidth
          style={{ marginTop: 20 }}
          label={data.comment}
          value={comment}
          onChange={commentChange}
          variant="outlined"
          multiline
          rows="4"
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
