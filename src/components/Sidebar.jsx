import React from 'react';
import Link from './Link';

export default function Sidebar(props) {

    const links = props.posts ? props.posts.map((post, index) => {
        return <Link title={post.title} key={post.id} handleChangePost={props.handleChangePost} index={index} />
    }) : null;

    return (
        <aside>
            <ul>
                {links}
            </ul>

        </aside>
    )
}
