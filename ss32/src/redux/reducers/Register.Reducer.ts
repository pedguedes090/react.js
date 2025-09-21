interface Account {
  email: string;
  passWord: string;
}

const initialState: Account[] = [];

const RegisterReducer = (state = initialState, action: any): Account[] => {
  switch (action.type) {
    case "Register":
      return [...state, action.payload]; 

    default:
      return state;
  }
};

export default RegisterReducer;
