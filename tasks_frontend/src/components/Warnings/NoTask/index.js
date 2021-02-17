import React from 'react';

import Box from '@material-ui/core/Box';
import NoData from '../../svgs/NoData'; 

const NoTask = () => {
  return (
    <>
      <Box pt={10} style={{opacity: 0.5}} display="flex" justifyContent="center">
        <NoData />
      </Box>
      <Box m={1} color="text.disabled" display="flex" justifyContent="center">
        Nenhuma tarefa
      </Box>
    </>
  );
}

export default NoTask;
