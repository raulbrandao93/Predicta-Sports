
import React from 'react';
import Header from './Header';
import BottomNav from './BottomNav';
import { Screen, User } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
  user: User;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, setActiveScreen, user }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
       <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
        <Header user={user} />
        <main className="flex-1 overflow-y-auto px-4 pb-20">
            {children}
        </main>
        <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      </div>
    </div>
  );
};

export default Layout;
