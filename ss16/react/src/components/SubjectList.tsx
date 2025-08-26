import React, { Component } from 'react'

export default class SubjectList extends Component {
    render() {
        const subjects = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];
        return (
            <div>
                <h2>Danh sách môn học</h2>
                <ul>
                    {subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                    ))}
                </ul>
            </div>
        );
    }
}