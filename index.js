const redux = require("redux");

const createStore = redux.createStore;
const combinedReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
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
//action creater
const buyIceCream = () => {
  return (
    //action
    {
      type: BUY_ICECREAM,
      info: "First Redux Action",
    }
  );
};

//reducer
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

const rootReducers = combinedReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});

const store = createStore(rootReducers);
console.log("Initial State", store.getState());
const unsubsribe = store.subscribe(() =>
  console.log("Upadted state", store.getState())
);

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(buyIceCream());

store.dispatch(buyIceCream());

store.dispatch(buyIceCream());

unsubsribe();
