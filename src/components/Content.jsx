import React, { Component } from 'react'
import Post from './Post';
import Comments from './Comments';

export default class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: null
        }
    }

    async getComments() {
        const comments = await fetch(`http://localhost:3001/comments?post-id=${this.props.currentPost + 1}`);

        return await comments.json();
    }

    componentDidMount() {
        this.getComments().then(comments => {
            this.setState({
                comments
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPost != this.props.currentPost) {
            this.getComments().then(comments => {
                this.setState({
                    comments
                })
            })
        }
    }

    render() {
        return (
            <div className="container">
                <Post data={this.props.data} currentPost={this.props.currentPost} />
                {null != this.state.comments && <Comments data={this.state.comments} />}
            </div>
        )
    }
}
