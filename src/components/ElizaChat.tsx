'use client';

import React, { useState, useEffect, useRef } from 'react';
import ElizaBot from 'eliza-as-promised';

const ElizaChat = () => {
  const [eliza, setEliza] = useState<any>(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elizaInstance = new ElizaBot({
      postTransforms: [
        ["I am (.*)", "Why are you $1? How long have you been feeling this way?"],
        ["I need (.*)", "Why do you need $1? How would it help you?"],
        ["Because (.*)", "Is that the only reason? Could there be something else?"],
        ["Hello(.*)", "Hi there! How are you feeling today?"],
        ["My name is (.*)", "Nice to meet you, $1! What would you like to talk about?"],
        ["(.*) help (.*)", "I'm here to help you. What kind of help are you looking for?"],
        ["I feel (.*)", "Why do you feel $1? Can you describe it more?"],
        ["(.*)", "That's interesting. Can you tell me more about it?"]
      ]
    });

    setEliza(elizaInstance);
    setMessages(["🤖 Eliza: Hello! How are you feeling today?"]);
  }, []);

  const handleSend = () => {
    if (!input.trim() || !eliza) return;

    const userMessage = `🧑 You: ${input}`;
    const elizaResponse = `🤖 Eliza: ${eliza.transform(input)}`;

    setMessages(prev => [...prev, userMessage, elizaResponse]);
    setInput('');

    // Scroll to bottom
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col">
        
        <div className="p-6 text-center border-b">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Eliza Chatbot 🤖</h1>
          <p className="text-gray-500 text-sm">Talk about your feelings!</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.startsWith('🧑') ? 'bg-blue-100 self-end ml-auto text-right' : 'bg-gray-100 text-left'
              }`}
            >
              {msg}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold"
          >
            Send
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ElizaChat;
