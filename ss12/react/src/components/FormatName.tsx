import { Component } from 'react'
const user = {
    firstName: 'Nguyễn Văn ',
    lastName: 'Nam'
}
function formatName(user: { firstName: string; lastName: string }) {
    return user.firstName + ' ' + user.lastName;
}
export default class FormatName extends Component {
    render() {
        return (
            <div>
                <p>Họ và Tên: {formatName(user)}</p>
            </div>
        )
    }
}
