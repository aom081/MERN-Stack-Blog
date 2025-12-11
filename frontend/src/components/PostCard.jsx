import React from "react";
import { Link } from "react-router-dom";

// Matches CreatePost fields: title, summary, content, image
const PostCard = ({ id, title, summary, content, imageUrl, author, date }) => {
  return (
    <article className="card bg-white shadow-md overflow-hidden">
      {imageUrl && (
        <figure className="max-h-56 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full object-cover" />
        </figure>
      )}
      <div className="card-body">
        <div className="flex items-start justify-between gap-4">
          <h2 className="card-title text-xl">{title}</h2>
          {date && (
            <span className="badge badge-ghost whitespace-nowrap">
              {new Date(date).toLocaleDateString()}
            </span>
          )}
        </div>
        {summary && <p className="opacity-80">{summary}</p>}
        {content && (
          <p className="text-sm opacity-60 line-clamp-2">{content}</p>
        )}
        <div className="flex items-center justify-between mt-2">
          {author && <span className="text-sm opacity-60">By {author}</span>}
          <div className="card-actions justify-end">
            <Link to={`/posts/${id}`} className="btn btn-primary btn-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
