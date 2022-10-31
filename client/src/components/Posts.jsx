import { fetchPosts } from "../api/posts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const info = await fetchPosts();
      setPosts(info.posts);
    }
    getPosts();
  }, []);

  return (
    <div>
      <div>
        <h1>Posts</h1>
      </div>
      {console.log("These are the Posts:", posts)}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <h6>{post.content}</h6>
            {post.tags.map((tag) => {
              return (
                <div key={tag.id}>
                  <h6>{tag.name}</h6>
                </div>
              );
            })}
            <button>See Details</button>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
