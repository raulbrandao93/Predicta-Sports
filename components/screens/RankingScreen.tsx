
import React from 'react';
import { mockRanking } from '../../constants';

const RankingScreen: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ranking</h1>
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {['Diário', 'Semanal', 'Global', 'Brasileirão', 'Eficiência'].map((tab, index) => (
          <button key={tab} className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${index === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {mockRanking.map((item, index) => (
          <div key={item.rank} className={`p-3 rounded-lg flex items-center ${index < 3 ? 'bg-slate-800 border border-slate-700' : 'bg-slate-800/50'}`}>
            <span className={`font-bold text-lg w-8 text-center ${index === 0 ? 'text-amber-400' : index === 1 ? 'text-slate-300' : index === 2 ? 'text-orange-400' : 'text-slate-500'}`}>
              {item.rank}
            </span>
            <img src={item.user.avatarUrl} alt={item.user.name} className="w-10 h-10 rounded-full mx-3" />
            <div className="flex-1">
              <p className="font-bold">{item.user.name}</p>
              <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${item.progress}%` }}></div>
              </div>
            </div>
            <span className="font-bold text-lg text-amber-400 ml-4">{item.score} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingScreen;
