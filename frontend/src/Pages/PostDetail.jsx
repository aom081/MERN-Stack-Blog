import React from "react";
import { useParams, Link } from "react-router-dom";

// Minimal PostDetail page to satisfy routing and exports.
// Replace with real data fetching when backend API is ready.
const PostDetail = () => {
  const { id } = useParams();

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Post Detail</h1>
        <Link to="/" className="btn btn-sm">
          Back
        </Link>
      </div>
      <div className="rounded-md bg-white/70 p-4 shadow">
        <p className="opacity-80">Showing details for post ID: {id}</p>
        <p className="text-sm opacity-60 mt-2">
          This is a placeholder component. Hook up API calls to display the
          actual post content.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
