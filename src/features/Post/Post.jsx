import React, { useState } from "react";
import "./Post.css";
import { TiMessage } from "react-icons/ti";
import moment from "moment";
import shortenNumber from "../../utils/shortenNumber";
import Card from "../../features/Card/Card";
import Comment from "../Comment/Comment";

const Post = ({ post, onToggleComments }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]); // To store the fetched comments
  const [loadingComments, setLoadingComments] = useState(false); 
  const [errorComments, setErrorComments] = useState(false); 

  const handleToggleComments = async () => {
    setShowComments(!showComments);

    // If we're already showing comments, don't fetch them again
    if (showComments || comments.length > 0) return;

    setLoadingComments(true);
    setErrorComments(false);

    try {
      const response = await fetch(`https://www.reddit.com${post.permalink}.json`);
      const json = await response.json();
      console.log("API response:", json); 
      // Extract comments from the response, taking only the first 5
      const topFiveComments = json[1].data.children.slice(0, 5).map(comment => comment.data);
      console.log("Top five comments:", topFiveComments); 
      setComments(topFiveComments);
      console.log("Top five comments:", JSON.stringify(topFiveComments, null, 2));
    } catch (error) {
      console.error("Failed to load comments:", error);
      setErrorComments(true);
    } finally {
      setLoadingComments(false);
    }
  };

  const renderComments = () => {
    console.log("Rendering these comments:", comments);
    if (loadingComments) {
      return <p>Loading comments...</p>;
    }

    if (errorComments) {
      return <p>Error loading comments.</p>;
    }

    if (showComments && comments.length > 0) {
      console.log("Mapping comments to Comment components");
      return (
        <div className="comments-section">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      );
    }

    return null;
  };

  if (!post) {
    return <div>Post data is not available.</div>; 
  }

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
