import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddComment(text);
      setText("");
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="자유롭게 댓글을 달아주세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="comment-textarea"
      ></textarea>
      <button type="submit" className="submit">등록</button>
    </form>
  );
};

export default CommentForm;