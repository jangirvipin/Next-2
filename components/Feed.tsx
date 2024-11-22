
import React from 'react';
type PostCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    };

const PostCard = ({ title, description, imageUrl }:PostCardProps) => {
  return (
    <div className="max-w-3xl rounded overflow-hidden shadow-lg bg-white mb-5">
      <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
