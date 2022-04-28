import React, { Component } from 'react'
import Post from './Post';
import Comments from './Comments';

export default function Content(props) {
    return (
        <div className="container">
            <Post data={props.data} currentPost={props.currentPost} />
            <Comments />
        </div>
    )
}
