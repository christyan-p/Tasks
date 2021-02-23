import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import api from '../../api/api';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import NoTask from '../Warnings/NoTask';

function deleteTask(e) {
  if ( e.target.id ) {
    axios.delete(api+'/'+e.target.id)
    .then(res => window.location.reload());
  }
}

let Tasks = ({ list }) => (
  list ?
    <>
      <List dense>
        { list.length === 0 && ( 
          <NoTask />
         ) }

        {list.map((task) => {
          return (
          <Box key={task.nrtarefa} m={1} borderRadius="borderRadius" boxShadow={2}>
            <ListItem>
              <ListItemText primary={task.nmtarefa} secondary={task.estadotarefa} />
                <Button id={task.nrtarefa} onClick={(e) => deleteTask(e)} size="small"><span id={task.nrtarefa}>Excluir</span></Button>
            </ListItem>
          </Box>
          )
        })}
      </List>
    </>
  :
  null
);

let PendingTasks = ({ list }) => (
  list ?
    <List dense>
      { list.length === 0 && ( 
        <NoTask />
      ) }

      { list.map((task) => {
        if ( task.estadotarefa === "Pendente" ) {
          return (
            <Box key={task.nrtarefa} m={1} borderRadius="borderRadius" boxShadow={2}>
              <ListItem button>
                <ListItemText primary={task.nmtarefa} />
              </ListItem>
            </Box>
          )
        } else {
          return null;
        }
      })}
    </List>
  :
  null
);

let DoneTasks = ({ list }) => (
  list ?
  <>
  { list.length === 0 && ( 
        <NoTask />
      ) }
      
  <GridList cellHeight={300} cols={1}>
    {list.map((task) => {
      if ( task.estadotarefa === "Finalizada" ) {
        return (
          <GridListTile key={task.nrtarefa}>
            <img src="http://realinstitutodeoncologia.com.br/wp-content/uploads/2017/07/white-background-image-3.jpg" alt={task.nmtarefa} />
            <GridListTileBar
              title={task.nmtarefa}
            />
          </GridListTile>
        )
      } else {
        return null;
      }
    })}
  </GridList>
  </>
  :
  null
);

const mapStateToProps = (state) => ({
  list: state.tasks,
});

Tasks = connect(mapStateToProps,null)(Tasks)
PendingTasks = connect(mapStateToProps,null)(PendingTasks)
DoneTasks = connect(mapStateToProps,null)(DoneTasks)

export { Tasks, PendingTasks, DoneTasks };
