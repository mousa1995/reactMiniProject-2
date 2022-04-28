import React, { Component } from 'react'
import Content from './Content';
import Sidebar from './Sidebar';

export default class BlogPost extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <Content />
            </>
        )
    }
}
