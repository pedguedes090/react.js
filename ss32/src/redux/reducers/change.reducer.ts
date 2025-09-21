const initial = {
  name: "Rikkei Academy",
};

const changeReducer = (state = initial, action: any) => {
  switch (action.type) {
    case "change":
      return {

        name: state.name === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy",
      };
    default:
      return state;
  }
};

export default changeReducer;
