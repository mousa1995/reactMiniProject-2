import React from 'react'

export default function Link(props) {
    //handleChangePost index
    return (
        <li onClick={() => { props.handleChangePost(props.index) }}>{props.title}</li>
    )
}
