const initState = {
    products: [],
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      case "ADD_TO_COMPARE": {
        let id = action.product.id;
  
        let index = state.products.findIndex((item) => item.id === id);
  
        if (index < 0) {
          return {
            products: [...state.products, action.product],
          };
        } else {
          return state;
        }
      }
      case "REMOVE_FROM_COMPARE": {
        return {
          products: state.products.filter((item) => item.id !== action.id),
        };
      }
      default:
        return state;
    }
  };