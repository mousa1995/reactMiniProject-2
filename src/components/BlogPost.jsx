import React, { Component } from 'react'
import Content from './Content';
import Sidebar from './Sidebar';

export default class BlogPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            currentPost: null
        }

        this.handleChangePost = this.handleChangePost.bind(this);
    }

    async getPost() {
        const posts = await fetch('http://localhost:3001/posts');

        return await posts.json();
    }

    handleChangePost(index) {
        this.setState({ currentPost: index })
    }

    componentDidMount() {
        this.getPost().then(posts => {
            this.setState({ posts, currentPost: 0 })
        })
    }

    render() {
        return (
            <>
                <Sidebar posts={this.state.posts} handleChangePost={this.handleChangePost} />
                {null != this.state.currentPost && <Content currentPost={this.state.currentPost} data={this.state.posts} />}
            </>
        )
    }
}
