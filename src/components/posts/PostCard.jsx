import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare } from 'lucide-react';



const PostCard = ({ id, title, body }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{body}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-gray-500">
            <MessageSquare size={16} className="mr-1" />
            <span className="text-sm">View comments</span>
          </div>
          
          <Link 
            to={`/post/${id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Read more
            <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;