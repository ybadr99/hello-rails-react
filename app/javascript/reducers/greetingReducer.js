const initialState = {
  greeting: '',
  error: null,
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREETING_SUCCESS':
      return { ...state, greeting: action.payload, error: null };
    case 'FETCH_GREETING_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
