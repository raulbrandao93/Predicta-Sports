
import React from 'react';
import PredictaLogo from '../common/PredictaLogo';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface PlanScreenProps {
  onSelectPlan: () => void;
}

const PlanCard: React.FC<{
  planName: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  onSelect: () => void;
}> = ({ planName, price, features, isFeatured, onSelect }) => {
  return (
    <div className={`border-2 rounded-xl p-6 flex flex-col ${isFeatured ? 'border-emerald-500 bg-slate-800' : 'border-slate-700'}`}>
      <h3 className={`font-bold text-2xl ${isFeatured ? 'text-emerald-400' : 'text-white'}`}>{planName}</h3>
      <p className="text-4xl font-bold my-4">{price}<span className="text-base font-normal text-slate-400">/mês</span></p>
      <ul className="space-y-3 text-slate-300 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full mt-6 font-bold py-3 rounded-lg transition-colors duration-300 ${isFeatured ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-700 text-white hover:bg-slate-600'}`}
      >
        Selecionar Plano
      </button>
    </div>
  );
};

const PlanScreen: React.FC<PlanScreenProps> = ({ onSelectPlan }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md text-center">
        <PredictaLogo className="justify-center mb-8" />
        <h2 className="text-3xl font-bold text-white mb-2">Escolha seu plano</h2>
        <p className="text-slate-400 mb-8">Comece sua jornada para se tornar um analista lendário.</p>

        <div className="space-y-6">
          <PlanCard
            planName="Free"
            price="R$ 0"
            features={['50 créditos diários', 'Modo Rápido', 'Acesso ao Ranking Básico', 'Anúncios']}
            onSelect={onSelectPlan}
          />
          <PlanCard
            planName="Premium"
            price="R$ 19,90"
            features={['150 créditos diários', 'Modo Rápido e Completo', 'Ranking Premium', 'Sem Anúncios', 'IA Chat (20/dia)']}
            isFeatured={true}
            onSelect={onSelectPlan}
          />
          <PlanCard
            planName="Pro"
            price="R$ 49,90"
            features={['400 créditos diários', 'Todos os modos', 'Ranking Pro', 'IA Chat Ilimitado', 'Acesso à Predicta Academy']}
            onSelect={onSelectPlan}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanScreen;
