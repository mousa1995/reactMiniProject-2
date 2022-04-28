import React from 'react'

export default function Post(props) {
    return (
        <div className="post">
            <img src={`./assets/${props.data[props.currentPost].image}`} alt="" />
            <h1>{props.data[props.currentPost].title}</h1>
            <div>{props.data[props.currentPost].body}</div>
        </div>
    )
}
