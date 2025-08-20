import { Component } from 'react'
const data = [
  { stt: 1, name: 'Malcolm Lockyer', dob: '21/03/1961', gender: 'Nam', address: 'New york' },
  { stt: 2, name: 'Maria', dob: '11/02/1990', gender: 'Nữ', address: 'London' },
];
export default class Accountlayout extends Component {
  render() {
    return (
      <div className="account-table-container">
      <table className="account-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.stt}>
              <td>{row.stt}</td>
              <td>{row.name}</td>
              <td>{row.dob}</td>
              <td>{row.gender}</td>
              <td>{row.address}</td>
              <td>
                <button className="btn-edit">Sửa</button>
                <button className="btn-delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  }
}
