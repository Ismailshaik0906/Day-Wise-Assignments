import React, { useState, useEffect } from "react";

const PostwithComments = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoadingPosts(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoadingPosts(false);
      })
      .catch(() => {
        setError("Failed to load posts");
        setLoadingPosts(false);
      });
  }, []);

  const fetchComments = (postId) => {
    setSelectedPost(postId);
    setLoadingComments(true);
    setError("");
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoadingComments(false);
      })
      .catch(() => {
        setError("Failed to load comments");
        setLoadingComments(false);
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Posts</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loadingPosts && <p>Loading posts...</p>}
      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {posts.slice(0, 10).map((post) => (
              <li
                key={post.id}
                onClick={() => fetchComments(post.id)}
                style={{
                  border: "1px solid gray",
                  margin: "5px 0",
                  padding: "10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                <b>{post.title}</b>
                <p>{post.body.substring(0, 50)}...</p>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Comments</h2>
          {loadingComments && <p>Loading comments...</p>}
          {selectedPost && comments.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {comments.map((c) => (
                <li
                  key={c.id}
                  style={{
                    border: "1px solid lightgray",
                    margin: "5px 0",
                    padding: "10px",
                    borderRadius: "6px",
                  }}
                >
                  <p><b>{c.name}</b> ({c.email})</p>
                  <p>{c.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostwithComments;
