import React, { useEffect, useState } from "react";
import PostCard from "./components/PostCard.jsx";
import postService from "./server/Post.server.js";
import Swal from "sweetalert2";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch posts from backend (example)
    const fetchPosts = async () => {
      try {
        const response = await postService.getAllPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load posts. Please try again.",
        });
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">SE NPRU Blog</h1>
        <p className="text-sm opacity-70">
          Read the latest posts from our community.
        </p>
      </header>
      {posts.length === 0 ? (
        <p className="text-center opacity-60 mt-8">No posts available yet.</p>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id || post._id} {...post} />
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
