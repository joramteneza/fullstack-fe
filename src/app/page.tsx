import React from "react";
import BlogPost from "./components/commons/BlogPost";

const mockData = [
  {
    postId: 1,
    title: "First Post",
    content: "This is the content of the first post.",
    comments: [
      { id: 1, text: "First comment" },
      { id: 2, text: "Second comment" },
    ],
  },
];

const IndexPage: React.FC = () => {
  // Simulated authentication state
  const isAuthenticated = true;

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Blog Posts</h1>

      <div className="space-y-8">
        {mockData.map((post) => (
          <BlogPost
            key={post.postId}
            postId={post.postId}
            title={post.title}
            content={post.content}
            comments={post.comments}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
