import { Component } from 'react'

export default class ListCourse extends Component {
    render() {
        return (
            <>
                <h2>Danh sách kết quả </h2>
                <ol>
                    <li>10+10 = {10 + 10}</li>
                    <li>10-10 = {10 - 10}</li>
                    <li>10*10 = {10 * 10}</li>
                    <li>10/10 = {10 / 10}</li>
                </ol>
            </>
        )
    }
}
