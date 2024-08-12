import React from 'react';
import './PostGrid.css';
import Post from '../Post/Post';

const PostGrid = ({ posts, selectedSubreddit }) => {
    if (!selectedSubreddit) {
        return null; // Don't render anything if no subreddit is selected
    }

    return (
        <div className="post-grid-container">
            {posts.map((post, index) => (
                <Post 
                    key={index}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    );
};

export default PostGrid;
