
import React from 'react';
import { mockFeed } from '../../constants';
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';

const FeedScreen: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Predicta Feed</h1>
      <div className="space-y-4">
        {mockFeed.map(post => (
          <div key={post.id} className="bg-slate-800 rounded-lg p-4">
            <div className="flex items-start mb-3">
              <img src={post.user.avatarUrl} alt={post.user.name} className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <p><span className="font-bold">{post.user.name}</span> {post.content}</p>
                <p className="text-xs text-slate-400">{post.timestamp}</p>
              </div>
            </div>
            {post.game && (
              <div className="bg-slate-900/50 rounded-lg p-3 flex justify-between items-center border border-slate-700">
                <div>
                  <p className="text-sm font-semibold">{post.game.teamA} vs {post.game.teamB}</p>
                  <p className="text-xs text-slate-400">{post.game.championship}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-emerald-400">{post.points} pts</p>
                  <p className="text-xs text-slate-400">Pontuação</p>
                </div>
              </div>
            )}
            <div className="flex justify-around items-center mt-4 pt-3 border-t border-slate-700 text-slate-400">
              <button className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                <HeartIcon className="w-5 h-5" /> <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" /> <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-emerald-400 transition-colors">
                <ArrowPathRoundedSquareIcon className="w-5 h-5" /> <span className="text-sm">{post.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedScreen;
