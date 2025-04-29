import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from '../../store/slices/postsSlice';
import PostCard from './PostCard';
import Loading from '../ui/Loading';
import ErrorDisplay from '../ui/ErrorDisplay';

const PostsList= () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);
  const { searchTerm } = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && posts.length === 0) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {searchTerm ? "Search Results" : "Latest Posts"}
      </h1>
      {console.log("posts", posts)}

      {searchTerm && (
        <p className="mb-4 text-gray-600">
          {filteredPosts.length === 0
            ? "No posts found matching your search."
            : `Found ${filteredPosts.length} posts matching "${searchTerm}"`}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>

      {filteredPosts.length === 0 && !searchTerm && (
        <div className="text-center py-8 text-gray-500">
          No posts available.
        </div>
      )}
    </div>
  );
};

export default PostsList;