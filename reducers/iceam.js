const BUY_ICECREAM = "BUY_ICECREAM";

const buyIceCream = () => {
  return (
    //action
    {
      type: BUY_ICECREAM,
      info: "First Redux Action",
    }
  );
};

const initialIceCreamState = {
  numberOfIceCream: 20,
};
const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};
export default IceCreamReducer;
