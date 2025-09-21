const initial: number[] = [];

const randomReducer = (state = initial, action: any) => {
  switch (action.type) {
    case "Random":
    
      return [...state, Math.floor(Math.random() * 100)];
    default:
      return state;
  }
};

export default randomReducer;
