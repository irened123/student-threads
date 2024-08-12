import React from 'react';
import './Post.css';

const Post = ({ title, content, author, date }) => {
    return (
        <div className="post-container">
            <h2 className="post-title">{title}</h2>
            <p className="post-content">{content}</p>
            <div className="post-meta">
                <span>Posted by {author}</span> | <span>{date}</span>
            </div>
        </div>
    );
};

export default Post;
