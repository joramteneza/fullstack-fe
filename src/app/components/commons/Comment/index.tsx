import React from "react";

interface CommentProps {
  comment: { id: number; text: string };
  isAuthenticated: boolean;
}

const Comment: React.FC<CommentProps> = ({ comment, isAuthenticated }) => {
  return (
    <div className="border rounded p-2 flex justify-between">
      <p>{comment.text}</p>
      {isAuthenticated && <button className="text-red-500">Delete</button>}
    </div>
  );
};

export default Comment;
