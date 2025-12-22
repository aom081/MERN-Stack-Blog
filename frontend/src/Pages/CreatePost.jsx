import React, { useState, useRef } from "react";
import postService from "../server/Post.server";
import Swal from "sweetalert2";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = "Title is required";
    if (!summary.trim()) e.summary = "Summary is required";
    if (!content.trim()) e.content = "Content is required";
    if (!imageFile) e.image = "Image is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onFileChange = (ev) => {
    const file = ev.target.files?.[0];
    if (!file) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("summary", summary.trim());
    formData.append("content", content.trim());
    formData.append("image", imageFile);

    try {
      await postService.createPost(formData);
      // Reset form on success
      setTitle("");
      setSummary("");
      setContent("");
      setImageFile(null);
      setImagePreview(null);
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = "";
      await Swal.fire({
        icon: "success",
        title: "Post created",
        text: "Your post has been published successfully.",
      });
    } catch (err) {
      console.error("Failed to create post", err);
      const status = err?.response?.status;
      const message =
        status === 401
          ? "You must be logged in to create a post."
          : "Failed to create post. Please try again.";
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="card bg-white shadow-xl">
        <div className="card-body">
          <h1 className="card-title">Create New Post</h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter post title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Summary</label>
              <input
                type="text"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Short summary of the post"
              />
              {errors.summary && (
                <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="textarea textarea-bordered w-full min-h-40"
                placeholder="Write your content here"
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">{errors.content}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Image
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="file-input file-input-bordered w-full"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
              {imagePreview && (
                <div className="mt-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-h-56 rounded border"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary btn-sm">
                Create
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setTitle("");
                  setSummary("");
                  setContent("");
                  setImageFile(null);
                  setImagePreview(null);
                  setErrors({});
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
