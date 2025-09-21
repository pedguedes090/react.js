const initialState = {
  name: "sang",
};

const changeColor = (state = initialState, action: any) => {
  switch (action.type) {
    case "doimau":
      return {
        name: state.name === "sang" ? "toi" : "sang",
      };
    default:
      return state;
  }
};

export default changeColor;
