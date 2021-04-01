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
