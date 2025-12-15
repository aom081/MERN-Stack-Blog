import PostModel from "../models/Post.Model.js";

export async function createPost(req, res) {
  const { title, summary, content, cover, author } = req.body;
  if (!title || !summary || !content || !cover || !author) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }
  try {
    const newPost = await PostModel.create({
      title,
      summary,
      content,
      cover,
      author,
    });
    if (!newPost) {
      return res.status(500).json({ message: "Failed to create post" });
    }
    res.json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getPosts(req, res) {
  try {
    const posts = await PostModel.find()
      .populate("author", "username")
      .sort({ createdAt: -1 })
      .limit(20);
    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getPostById(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Post ID is required" });
  }
  try {
    const post = await PostModel.findById(id)
      .populate("author", "username")
      .sort({ createdAt: -1 })
      .limit(20);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
   res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function updatePost(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function deletePost(req, res) {
  const { id } = req.params;
  try {
    const deletedPost = await PostModel.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getPostsByAuthor(req, res) {
  const { authorId } = req.params;
  if (!authorId) {
    return res.status(400).json({ message: "Author ID is required" });
  }
  try {
    const posts = await PostModel.find({ author: authorId })
      .populate("author", "username")
      .sort({ createdAt: -1 });
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this author" });
    }
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}
