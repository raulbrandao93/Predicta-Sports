
import React from 'react';
import { User } from '../../types';
import { TrophyIcon, ChartPieIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

interface ProfileScreenProps {
  user: User;
  onLogout: () => void;
}

const StatCard: React.FC<{ icon: React.ElementType, value: string | number, label: string }> = ({ icon: Icon, value, label }) => (
    <div className="bg-slate-800 p-4 rounded-lg text-center">
        <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
        <p className="text-xl font-bold">{value}</p>
        <p className="text-sm text-slate-400">{label}</p>
    </div>
);

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, onLogout }) => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center mt-4">
        <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full border-4 border-emerald-500" />
        <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
        <p className="text-slate-400">Nível {user.level}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 my-8">
        <StatCard icon={TrophyIcon} value={user.totalScore.toLocaleString()} label="Pontos" />
        <StatCard icon={ChartPieIcon} value={`${user.accuracy}%`} label="Acertos" />
        <StatCard icon={CheckBadgeIcon} value="27" label="Conquistas" />
      </div>

      <div className="space-y-2">
        <button className="w-full text-left bg-slate-800 p-4 rounded-lg font-semibold hover:bg-slate-700 transition">Histórico de Previsões</button>
        <button className="w-full text-left bg-slate-800 p-4 rounded-lg font-semibold hover:bg-slate-700 transition">Conquistas</button>
        <button className="w-full text-left bg-slate-800 p-4 rounded-lg font-semibold hover:bg-slate-700 transition">Configurações</button>
      </div>

      <button
        onClick={onLogout}
        className="mt-8 w-full bg-red-600/20 text-red-400 font-bold py-3 rounded-lg hover:bg-red-600/40 hover:text-red-300 transition-colors"
      >
        Sair
      </button>
    </div>
  );
};

export default ProfileScreen;
