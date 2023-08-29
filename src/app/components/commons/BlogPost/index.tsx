// components/BlogPost.tsx

import React from "react";
import Comment from "../Comment";

interface BlogPostProps {
  postId: number;
  title: string;
  content: string;
  comments: { id: number; text: string }[];
  isAuthenticated: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({
  postId,
  title,
  content,
  comments,
  isAuthenticated,
}) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{content}</p>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>

      {isAuthenticated ? (
        <div>
          {/* Comment input field */}
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Add a comment"
          ></textarea>
          <button className="mt-2 p-2 bg-blue-500 text-white rounded">
            Post Comment
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-2">Please log in to comment.</p>
          <button className="p-2 bg-blue-500 text-white rounded">Login</button>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
