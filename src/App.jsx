import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Loading from "./components/ui/Loading";
// import PostsList from "./components/posts/PostsList";
// import PostDetails from "./components/posts/PostDetails";

// Lazy-loaded components
const PostsList = lazy(() => import("./components/posts/PostsList"));
const PostDetails = lazy(() => import("./components/posts/PostDetails"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8">
          <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
