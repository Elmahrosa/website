
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Welcome to TEOS Egypt. I am the AI Guard Assistant. How can I help you understand our civic blockchain framework today?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInput("");
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { text: response, isUser: false }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden flex flex-col border border-slate-200">
          <div className="bg-egyptian-blue p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🛡️</span>
              <span className="font-semibold font-cinzel tracking-wider">TEOS AI GUARD</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-pharaoh-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${m.isUser ? 'bg-egyptian-blue text-white' : 'bg-slate-200 text-slate-800'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-200 text-slate-800 rounded-2xl px-4 py-2 text-sm italic">
                  AI Guard is thinking...
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about TEOS..." 
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-pharaoh-gold"
            />
            <button onClick={handleSend} className="bg-pharaoh-gold text-white p-2 rounded-full hover:bg-yellow-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-egyptian-blue text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-pharaoh-gold"
        >
          <span className="text-2xl">🛡️</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
