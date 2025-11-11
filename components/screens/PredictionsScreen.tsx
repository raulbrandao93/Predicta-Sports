
import React, { useState } from 'react';
import { Game, PredictionMode } from '../../types';
import { mockGames, mockUser } from '../../constants';
import { XMarkIcon, BoltIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

const PredictionModal: React.FC<{ game: Game; onClose: () => void }> = ({ game, onClose }) => {
    const [mode, setMode] = useState<PredictionMode>(PredictionMode.Quick);
    const [credits, setCredits] = useState(mockUser.credits);

    const cost = mode === PredictionMode.Quick ? 10 : 20;
    const maxPoints = mode === PredictionMode.Quick ? 40 : 100;
    
    const quickFields = ['Placar', 'Posse de Bola', 'Escanteios'];
    const fullFields = ['Gols', 'Escanteios', 'Posse', 'Finalizações', 'Cartões', 'Faltas', 'Impedimentos', 'Defesas', 'xG'];

    const handleSave = () => {
        setCredits(prev => prev - cost);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
            <div className="bg-slate-800 rounded-2xl w-full max-w-md max-h-[90vh] flex flex-col">
                <div className="p-4 border-b border-slate-700 flex justify-between items-center">
                    <h3 className="font-bold text-lg">Fazer Previsão</h3>
                    <button onClick={onClose}><XMarkIcon className="w-6 h-6 text-slate-400"/></button>
                </div>

                <div className="p-4 overflow-y-auto">
                    <div className="text-center mb-4">
                        <p className="text-sm text-slate-400">{game.championship}</p>
                        <div className="flex justify-around items-center my-2">
                             <div className="flex flex-col items-center w-2/5">
                                <img src={game.teamALogo} alt={game.teamA} className="w-12 h-12 mb-1" />
                                <span className="text-md font-bold text-center">{game.teamA}</span>
                            </div>
                            <span className="font-bold text-2xl text-slate-500">vs</span>
                            <div className="flex flex-col items-center w-2/5">
                                <img src={game.teamBLogo} alt={game.teamB} className="w-12 h-12 mb-1" />
                                <span className="text-md font-bold text-center">{game.teamB}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex bg-slate-900 rounded-lg p-1 mb-4">
                        <button onClick={() => setMode(PredictionMode.Quick)} className={`w-1/2 flex items-center justify-center font-bold py-2 rounded-md transition ${mode === PredictionMode.Quick ? 'bg-emerald-500' : ''}`}>
                            <BoltIcon className="w-5 h-5 mr-2" /> Rápido
                        </button>
                        <button onClick={() => setMode(PredictionMode.Full)} className={`w-1/2 flex items-center justify-center font-bold py-2 rounded-md transition ${mode === PredictionMode.Full ? 'bg-blue-800' : ''}`}>
                            <RocketLaunchIcon className="w-5 h-5 mr-2" /> Completo
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {(mode === PredictionMode.Quick ? quickFields : fullFields).map(field => (
                            <div key={field}>
                                <label className="text-sm text-slate-400">{field}</label>
                                <div className="flex items-center mt-1">
                                    <input type="number" className="w-full bg-slate-700 text-center font-bold rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                                    {field !== 'Posse de Bola' && field !== 'Posse' && field !== 'xG' && (
                                        <input type="number" className="w-full bg-slate-700 text-center font-bold rounded-r-md p-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ml-1"/>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-4 mt-auto border-t border-slate-700 bg-slate-800 rounded-b-2xl">
                    <div className="flex justify-between text-sm mb-4">
                        <div>
                            <p className="text-slate-400">Custo</p>
                            <p className="font-bold text-amber-500">{cost} créditos</p>
                        </div>
                        <div>
                            <p className="text-slate-400">Pontos Máx.</p>
                            <p className="font-bold text-emerald-400">{maxPoints} pts</p>
                        </div>
                        <div className="text-right">
                             <p className="text-slate-400">Créditos Restantes</p>
                            <p className="font-bold">{credits - cost}</p>
                        </div>
                    </div>
                    <button onClick={handleSave} className="w-full bg-emerald-500 font-bold py-3 rounded-lg hover:bg-emerald-600 transition">Salvar Previsão</button>
                </div>
            </div>
        </div>
    );
};

const PredictionsScreen: React.FC = () => {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const championships = [...new Set(mockGames.map(g => g.championship))];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Previsões</h1>
            {championships.map(champ => (
                <section key={champ} className="mb-8">
                    <h2 className="text-lg font-bold text-emerald-400 mb-4">{champ}</h2>
                    <div className="space-y-3">
                        {mockGames.filter(g => g.championship === champ).map(game => (
                            <div key={game.id} className="bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-sm text-slate-400 mr-4">{game.time}</span>
                                    <div>
                                        <div className="flex items-center">
                                            <img src={game.teamALogo} alt={game.teamA} className="w-5 h-5 mr-2" />
                                            <span>{game.teamA}</span>
                                        </div>
                                        <div className="flex items-center mt-1">
                                            <img src={game.teamBLogo} alt={game.teamB} className="w-5 h-5 mr-2" />
                                            <span>{game.teamB}</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedGame(game)} className="bg-emerald-500 text-white font-bold py-2 px-4 rounded-md text-sm hover:bg-emerald-600">
                                    Prever
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
            {selectedGame && <PredictionModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
        </div>
    );
};

export default PredictionsScreen;
