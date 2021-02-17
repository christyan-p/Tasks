import React, { Component } from 'react';
import axios from 'axios';

import api from '../../api/api';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class AddTaskButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      task: {
        nmtarefa: null,
        estadotarefa: "Pendente"
      }
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onInputchange(event) {
    this.setState({
      task: {
        nmtarefa: event.target.value,
        estadotarefa: "Pendente"
      }
    });
  }

  onSubmitForm() {
    if (this.state.task.nmtarefa) {
      axios.post(api, this.state.task)
      .then(res => console.log(res))
      .catch(error => console.log(error))
      this.setState({
        open: false
      });
      window.location.reload();
    } else {
      alert('O nome da tarefa não pode ficar vazio');
    }
  }

  handleClickOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render(){

    return (
      <>
        <Fab color="primary" aria-label="add" onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>
        <Dialog 
          open={this.state.open} 
          onClose={this.handleClose} 
          aria-labelledby="form-dialog-title"
        >
        <DialogContent>
          <TextField name="nmtarefa" label="Tarefa" onChange={this.onInputchange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={this.onSubmitForm} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      </>
    );
  }
}

export default AddTaskButton;