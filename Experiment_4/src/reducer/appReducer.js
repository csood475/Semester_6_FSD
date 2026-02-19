export const initialState = {
  savedProjects: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return { ...state, savedProjects: [...state.savedProjects, action.payload] };
    case 'REMOVE_PROJECT':
      return { ...state, savedProjects: state.savedProjects.filter(item => item.title !== action.payload) };
    case 'CLEAR_PROJECTS':
      return { ...state, savedProjects: [] };
    default:
      return state;
  }
};