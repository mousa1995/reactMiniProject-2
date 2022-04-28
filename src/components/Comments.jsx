import React from 'react';
import Comment from './Comment';

export default function Comments() {
    return (
        <div class="comments">
            <p>Comments:</p>
            <Comment />
            <div class="comment">
                <p>Comment 1</p>
            </div>
            <div class="comment">
                <p>Comment 2</p>
            </div>
        </div>
    )
}
