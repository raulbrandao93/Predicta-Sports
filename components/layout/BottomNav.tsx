
import React from 'react';
import { Screen } from '../../types';
import { HomeIcon, ShieldCheckIcon, ChartBarIcon, NewspaperIcon, UserCircleIcon } from '@heroicons/react/24/solid';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { screen: Screen.Home, label: 'Início', icon: HomeIcon },
    { screen: Screen.Predictions, label: 'Previsões', icon: ShieldCheckIcon },
    { screen: Screen.Ranking, label: 'Ranking', icon: ChartBarIcon },
    { screen: Screen.Feed, label: 'Feed', icon: NewspaperIcon },
    { screen: Screen.Profile, label: 'Perfil', icon: UserCircleIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700">
      <div className="max-w-md mx-auto flex justify-around">
        {navItems.map((item) => {
          const isActive = activeScreen === item.screen;
          return (
            <button
              key={item.screen}
              onClick={() => setActiveScreen(item.screen)}
              className={`flex flex-col items-center justify-center p-3 w-full text-xs transition-colors duration-200 ${
                isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              <item.icon className={`h-6 w-6 mb-1 ${isActive ? 'text-emerald-400' : ''}`} />
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
