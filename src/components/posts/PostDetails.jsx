import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById, clearCurrentPost } from '../../store/slices/postsSlice';
import { fetchCommentsByPostId, clearComments } from '../../store/slices/commentsSlice';
// import CommentsList from '../comments/CommentsList';
import Loading from '../ui/Loading';
import ErrorDisplay from '../ui/ErrorDisplay';
import { ArrowLeft, User } from 'lucide-react';

const PostDetails= () => {
  const dispatch = useDispatch();
    const { id } = useParams();

  const {
    currentPost,
    loading: postLoading,
    error: postError,
  } = useSelector((state) => state.posts);
  
  useEffect(() => {
    if (id) {
      const postId = parseInt(id);
      dispatch(fetchPostById(postId));
      dispatch(fetchCommentsByPostId(postId));
    }
    
    return () => {
      dispatch(clearCurrentPost());
      dispatch(clearComments());
    };
  }, []);

  if (postLoading && !currentPost) {
    return <Loading />;
  }

  if (postError) {
    return <ErrorDisplay message={postError} />;
  }

  if (!currentPost) {
    return <ErrorDisplay message="Post not found" />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft size={18} className="mr-1" />
        Back to posts
      </Link>
      
      <article className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{currentPost.title}</h1>
        
        <div className="flex items-center text-gray-500 mb-6">
          <User size={18} className="mr-2" />
          <span>User ID: {currentPost.userId}</span>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed whitespace-pre-line">{currentPost.body}</p>
        </div>
      </article>
      
      
    </div>
  );
};

export default PostDetails;