import React from 'react';
import Comment from './Comment';

export default function Comments() {
    return (
        <div className="comments">
            <p>Comments:</p>
            <Comment />
            <div className="comment">
                <p>Comment 1</p>
            </div>
            <div className="comment">
                <p>Comment 2</p>
            </div>
        </div>
    )
}
