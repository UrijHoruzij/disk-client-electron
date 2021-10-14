const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_DATA":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
