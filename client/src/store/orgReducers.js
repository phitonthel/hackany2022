const initialState = {
  selectedOrg: {
    id: null,
    name: null
  },
}

const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ORG': {
      return { 
        ...state, 
        selectedOrg: action.payload
      }
    }
    default:
      return state
  }
}

export default orgReducer