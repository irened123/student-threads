import React, { useState } from "react";
import "./Post.css";
import { TiMessage } from "react-icons/ti";
import moment from "moment";
import shortenNumber from "../../utils/shortenNumber";
import Card from "../../features/Card/Card";
import Comment from "../Comment/Comment";

const Post = ({ post, onToggleComments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleToggleComments = () => {
    setShowComments(!showComments);
    onToggleComments(post.permalink);
  };

  const renderComments = () => {
    if (post.loadingComments) {
      return <p>Loading comments...</p>;
    }

    if (post.errorComments) {
      return <p>Error loading comments.</p>;
    }

    if (showComments && post.comments) {
      return (
        <div className="comments-section">
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <article className="post" key={post.id}>
      <Card>
        <div className="post-content">
          <h3 className="post-title">{post.title}</h3>
          {post.url && (
            <div className="post-image-container">
              <img src={post.url} alt="Post" className="post-image" />
            </div>
          )}
          <div className="post-details">
            <div className="post-votes">
              <span className="upvotes">👍 {shortenNumber(post.ups, 1)}</span>
              <span className="downvotes">
                👎 {shortenNumber(post.downs, 1)}
              </span>
            </div>
            <span className="post-author">{post.author}</span>
            <span className="post-time">
              {moment.unix(post.created_utc).fromNow()}
            </span>
            <span className="post-comments">
              <button
                type="button"
                className={`comment-toggle-button ${
                  showComments ? "active" : ""
                }`}
                onClick={handleToggleComments}
                aria-label="Toggle comments"
              >
                <TiMessage className="icon-action" />
              </button>
              {shortenNumber(post.num_comments, 1)} Comments
            </span>
          </div>
          {renderComments()}
        </div>
      </Card>
    </article>
  );
};

export default Post;
