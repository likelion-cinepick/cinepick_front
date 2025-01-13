import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="comment-header">
            <img src={comment.avatar} alt="avatar" className="comment-avatar" />
            <div className="comment-content">{comment.text}</div>
          </div>
          <div className="comment-info">
              <span className="comment-nickname">{comment.nickname} |</span>
              <span className="comment-date">{comment.date}</span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
