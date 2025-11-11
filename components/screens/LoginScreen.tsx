
import React from 'react';
import PredictaLogo from '../common/PredictaLogo';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-sm text-center">
        <PredictaLogo className="justify-center mb-12" />
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input 
            type="password" 
            placeholder="Senha"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button 
            onClick={onLogin}
            className="w-full bg-emerald-500 text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
          >
            Entrar
          </button>
        </div>

        <div className="my-6 flex items-center">
          <hr className="w-full border-slate-700" />
          <span className="px-2 text-slate-400 text-sm">OU</span>
          <hr className="w-full border-slate-700" />
        </div>

        <div className="space-y-4">
          <button 
            onClick={onLogin}
            className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
          >
            {/* Google Icon SVG */}
            <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.244,44,30.036,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
            Entrar com Google
          </button>
          <button 
            onClick={onLogin}
            className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
          >
            {/* Apple Icon SVG */}
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24"><path fill="currentColor" d="M19.1,10.64a5.2,5.2,0,0,0-4.48,2.71,5.43,5.43,0,0,0-4.6,2.6,3.13,3.13,0,0,0,1.26,4.3,3.17,3.17,0,0,0,4.29-1.25,1,1,0,0,1,1.86.7,5.32,5.32,0,0,1-7.14,2.12,5.22,5.22,0,0,1-2.11-7.15A5.3,5.3,0,0,1,12.55,9a5.13,5.13,0,0,1,4.24-2.13A2.86,2.86,0,0,0,19.1,4.18a2.8,2.8,0,0,1-2.29-2.74,1,1,0,0,1,1-.94,2.86,2.86,0,0,1,2.84,2.85,2.94,2.94,0,0,1-2.23,2.85A.82.82,0,0,1,19.1,10.64Z"></path></svg>
            Entrar com Apple
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Não tem conta? <a href="#" className="font-bold text-emerald-400">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
