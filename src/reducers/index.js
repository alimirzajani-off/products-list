const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state };
    case "PRODUCTS_RECEIVED":
      return { ...state, product: action.product.result.data };
    default:
      return state;
  }
};

export default reducer;
