
import React from 'react';
import { Screen, Game, RankingItem } from '../../types';
import { mockGames, mockRanking, mockAiSuggestions } from '../../constants';
import { PlusIcon } from '@heroicons/react/24/solid';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  onOpenChat: () => void;
}

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
  <div className="bg-slate-800 rounded-lg p-3 w-64 flex-shrink-0 mr-4 text-center">
    <p className="text-xs text-slate-400 mb-2">{game.championship}</p>
    <div className="flex justify-around items-center">
      <div className="flex flex-col items-center">
        <img src={game.teamALogo} alt={game.teamA} className="w-10 h-10 mb-1" />
        <span className="text-sm font-bold">{game.teamA}</span>
      </div>
      <div className="text-center">
        {game.status === 'live' ? 
            <span className="text-xs bg-red-500 text-white font-bold px-2 py-1 rounded">AO VIVO</span> :
            <span className="font-bold text-xl">{game.time}</span>
        }
      </div>
      <div className="flex flex-col items-center">
        <img src={game.teamBLogo} alt={game.teamB} className="w-10 h-10 mb-1" />
        <span className="text-sm font-bold">{game.teamB}</span>
      </div>
    </div>
  </div>
);

const RankingPreviewItem: React.FC<{ item: RankingItem }> = ({ item }) => (
  <div className="flex items-center justify-between bg-slate-800 p-2 rounded-md">
    <div className="flex items-center">
      <span className="font-bold text-slate-400 w-6">{item.rank}</span>
      <img src={item.user.avatarUrl} alt={item.user.name} className="w-8 h-8 rounded-full ml-2" />
      <span className="ml-3 font-semibold">{item.user.name}</span>
    </div>
    <span className="font-bold text-amber-400">{item.score} pts</span>
  </div>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onOpenChat }) => {
  return (
    <div className="space-y-8 relative">
      <section>
        <h2 className="text-xl font-bold mb-4">Jogos do Dia</h2>
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4">
          {mockGames.filter(g => g.status !== 'finished').map(game => <GameCard key={game.id} game={game} />)}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Ranking Diário</h2>
          <button onClick={() => onNavigate(Screen.Ranking)} className="text-sm text-emerald-400 font-semibold">Ver todos</button>
        </div>
        <div className="space-y-2">
          {mockRanking.slice(0, 3).map(item => <RankingPreviewItem key={item.rank} item={item} />)}
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-bold mb-4">Sugestões da IA</h2>
         <div className="space-y-3">
          {mockAiSuggestions.map(game => (
             <div key={game.id} className="bg-slate-800/50 border border-blue-800 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={game.teamALogo} alt={game.teamA} className="w-8 h-8"/>
                    <span className="mx-2 font-bold">vs</span>
                    <img src={game.teamBLogo} alt={game.teamB} className="w-8 h-8"/>
                    <div className="ml-4">
                        <p className="font-bold text-sm">{game.teamA} vs {game.teamB}</p>
                        <p className="text-xs text-slate-400">{game.championship}</p>
                    </div>
                </div>
                <button onClick={() => onNavigate(Screen.Predictions)} className="bg-blue-800 text-white text-xs font-bold py-2 px-3 rounded-md hover:bg-blue-700">Prever</button>
            </div>
          ))}
        </div>
      </section>
      <button 
        onClick={onOpenChat}
        className="fixed bottom-24 right-4 bg-emerald-500 rounded-full p-4 shadow-lg hover:bg-emerald-600 transition-transform transform hover:scale-110 z-20"
      >
        <PlusIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default HomeScreen;
