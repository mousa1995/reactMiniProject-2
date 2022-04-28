import React, { Component } from 'react'
import Content from './Content';
import Sidebar from './Sidebar';

export default class BlogPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null
        }
    }

    async getPost() {
        const posts = await fetch('http://localhost:3001/posts');

        return await posts.json();
    }

    componentDidMount() {
        this.getPost().then(posts => {
            this.setState({ posts })
        })
    }

    render() {
        return (
            <>
                <Sidebar posts={this.state.posts} />
                <Content />
            </>
        )
    }
}
