export default (state, action) => {
  switch (action.type) {
    case "DELETE_LIABILITY":
      return {
        ...state,
        liabilities: state.liabilities.filter(
          (liability) => liability.id !== action.payload
        ),
      };
    case "ADD_LIABILITY":
      return {
        ...state,
        liabilities: [action.payload, ...state.liabilities],
      };
    default:
      return state;
  }
};
