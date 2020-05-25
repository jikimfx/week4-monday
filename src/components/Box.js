import React from 'react'

export default function Box(props) {
    return (
        <div className={`box ${props.color}`}>
            My {props.name} box {props.color};
        </div>
    )
}