import { Component } from 'react'

export default class ColorBox extends Component {
    render() {
        return (
            <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ color: "white", width: "100px", height: "100px", backgroundColor: "red", textAlign: "center", lineHeight: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Box
                </div>
                <div style={{ color: "white", width: "100px", height: "100px", backgroundColor: "blue", textAlign: "center", lineHeight: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Box2
                </div>
                <div style={{ color: "white", width: "100px", height: "100px", backgroundColor: "green", textAlign: "center", lineHeight: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    Box3
                </div>
            </div>
        )
    }
}
