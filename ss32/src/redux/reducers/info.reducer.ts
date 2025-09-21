interface User {
  id: number;
  name: string;
  gender: string;
  dateOfBirth: string;
  address: string;
}

const initialUser: User[] = [
    {
 id: 1,
  name: "Nguyen Van Nam",
  gender: "nam",
  dateOfBirth: "20/3/2023",
  address: "thanh xuan , hanoi",
    },
    {
        id: 2,
  name: "Nguyen Thi B",
  gender: "Nu",
  dateOfBirth: "20/3/2023",
  address: "Cau giay , hanoi",

    }
];


 


const infoReducer = (state: User[] = initialUser, action: any): User[] => {
  switch (action.type) {
    case "LOG":
      console.log(state); 
      return state;
    default:
      return state;
  }
};

export default infoReducer;
