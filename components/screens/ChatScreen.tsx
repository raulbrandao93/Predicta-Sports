
import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { getChatResponse } from '../../services/geminiService';

interface ChatScreenProps {
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const ChatScreen: React.FC<ChatScreenProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Olá! Sou o assistente da Predicta Sports. Como posso ajudar com suas análises hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await getChatResponse(input);
      const aiMessage: Message = { text: aiResponseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = { text: 'Desculpe, não consegui processar sua pergunta. Tente novamente.', sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex flex-col p-4 font-sans">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-emerald-400">Predicta Chat</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
                <XMarkIcon className="w-8 h-8"/>
            </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {messages.map((msg, index) => (
                <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-blue-800 flex-shrink-0"></div>}
                    <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-emerald-500 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'}`}>
                        <p>{msg.text}</p>
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                    <div className="w-8 h-8 rounded-full bg-blue-800 flex-shrink-0"></div>
                    <div className="p-3 rounded-2xl bg-slate-800 text-slate-200 rounded-bl-none">
                        <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-75"></span>
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        <div className="mt-4 flex items-center bg-slate-800 rounded-full p-2">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte algo..."
                className="flex-1 bg-transparent px-4 text-white placeholder-slate-400 focus:outline-none"
                disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || input.trim() === ''} className="bg-emerald-500 rounded-full p-2 disabled:bg-slate-600">
                <PaperAirplaneIcon className="w-6 h-6 text-white"/>
            </button>
        </div>
    </div>
  );
};

export default ChatScreen;
