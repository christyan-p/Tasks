import Navbar from './components/Navbar';
import AddTaskButton from './components/AddTaskButton';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';
import { getTasks } from './actions'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

store.dispatch(getTasks())

function App () {
  const useStyles = makeStyles((theme) => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  }));
  const classes = useStyles();
    return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Box className={classes.fab} m={3} pr={22}>
          <AddTaskButton />
        </Box>
      </div>
    </Provider>
    )
}

export default App;
