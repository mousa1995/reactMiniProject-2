import React from 'react';
import Comment from './Comment';

export default function Comments(props) {

    const comments = props.data ?
        props.data.map(comment => <Comment body={comment.body} key={comment.id} />) :
        null;
    return (
        <div className="comments">
            <p>Comments:</p>
            {comments}
        </div>
    )
}
