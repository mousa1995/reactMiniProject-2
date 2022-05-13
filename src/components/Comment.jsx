import React from 'react'

export default function Comment(props) {
    return (
        <div className="comment">
            <p>{props.body}</p>
        </div>
    )
}
