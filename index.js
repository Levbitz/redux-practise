const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
//action creater
const buyCake = () => {
  return (
    //action
    {
      type: BUY_CAKE,
      info: "First Redux Action",
    }
  );
};

//reducer
const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubsribe = store.subscribe(() =>
  console.log("Upadted state", store.getState())
);

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyCake());

unsubsribe();
