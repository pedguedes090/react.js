import { Component } from "react";
import "./Bai5.css";
interface User {
  msv: string;
  tensv: string;
  date: string;
  email: string;
  trangthai: string;
}
interface State {
  user: User[];
}
export default class Baitap5_tbody extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: [
        {
          msv: "SV001",
          tensv: "Nguyen Van A",
          date: "21/12/2013",
          email: "nva@gmail.com",
          trangthai: 'dang hoat dong',
        },
        {
          msv: "SV002",
          tensv: "Nguyen Thi B",
          date: "21/12/2022",
          email: "ntb@gmail.com",
          trangthai: 'ngung hoat dong',
        },
      ],
    };
  }
  render() {
    return (
      <tbody>
        {this.state.user.map((sv, index) => {
          return (
            <tr key={index}>
              <td className="stt">{index+1}</td>
              <td className="msv">{sv.email}</td>
              <td className="tensv">{sv.tensv}</td>
              <td className="msv">{sv.date}</td>
              <td className="tensv">{sv.email}</td>
              <td className="tensv">{sv.trangthai}</td>
              <td className="cnc"><button className="chan">Chan</button></td>
              <td className="cnc"><button className="sua">Sua</button></td>
              <td className="cnc"><button className="xoa">Xoa</button></td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}