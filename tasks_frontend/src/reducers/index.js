const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, loading: true };
    case 'TASKS_LOADED':
      return { ...state, tasks: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;