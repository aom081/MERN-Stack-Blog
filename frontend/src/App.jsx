import React, { useState } from "react";
import PostCard from "./components/PostCard.jsx";

function App() {
  // Example state usage (remove if not needed)
  const [count, setCount] = useState(0);
  return (
    <div className="p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="opacity-80">Welcome to SE NPRU Blog.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Example cards; replace with real data from backend */}
        <PostCard
          id={"1"}
          title="Getting started with MERN"
          summary="A quick guide to building your first MERN app."
          content="This post walks through setting up MongoDB, Express, React, and Node to build a full-stack application."
          author="Admin"
          imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60"
          date={new Date().toISOString()}
        />
        <PostCard
          id={"2"}
          title="Tailwind + DaisyUI Tips"
          summary="Practical patterns to speed up your UI work."
          content="Learn how to compose utility classes and leverage components to ship polished UIs quickly."
          author="Jane Doe"
          imageUrl="https://images.unsplash.com/photo-1505238687151-1c3b93f99bcd?w=800&auto=format&fit=crop&q=60"
          date={new Date().toISOString()}
        />
        <PostCard
          id={"3"}
          title="Routing with React Router"
          summary="Nested layouts, parameters, and not found routes."
          content="We explore `createBrowserRouter`, nested routes with layouts, and URL params like :id."
          author="John Smith"
          imageUrl="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60"
          date={new Date().toISOString()}
        />
      </section>

      <div>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="btn btn-sm btn-primary"
        >
          Demo clicks: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
