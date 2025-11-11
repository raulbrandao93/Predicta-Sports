
import React from 'react';
import { User } from '../../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="p-4 flex justify-between items-center sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10">
      <div className="flex items-center space-x-3">
        <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full border-2 border-emerald-500" />
        <div>
          <p className="font-bold text-white">{user.name}</p>
          <p className="text-xs text-slate-400 capitalize">{user.level} Level</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-amber-500 text-lg">{user.credits}</p>
        <p className="text-xs text-slate-400">Créditos</p>
      </div>
    </header>
  );
};

export default Header;
