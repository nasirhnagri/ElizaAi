// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import ElizaBot from 'eliza-as-promised';

// type Message = {
//   sender: 'user' | 'eliza';
//   text: string;
//   timestamp: string;
// };

// const initEliza = () =>
//   new ElizaBot({
//     postTransforms: [
//       ["I am (.*)", "Why are you $1? How long have you been feeling this way?"],
//       ["I need (.*)", "Why do you need $1? How would it help you?"],
//       ["Because (.*)", "Is that the only reason? Could there be something else?"],
//       ["Hello(.*)", "Hello there! How are you feeling today?"],
//       ["My name is (.*)", "Nice to meet you, $1! What's been on your mind lately?"],
//       ["(.*) help (.*)", "I'm here to help. What exactly do you need help with?"],
//       ["I feel (.*)", "What’s making you feel $1? Let's talk about it."],
//       ["(.*)", "That's interesting. Could you explain it a bit more?"]
//     ]
//   });

// const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// const ElizaChat = () => {
//   const [eliza, setEliza] = useState<ElizaBot | null>(null);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [darkMode, setDarkMode] = useState(false);
//   const chatRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const instance = initEliza();
//     setEliza(instance);
//     setMessages([{ sender: 'eliza', text: "Hi there! I'm Eliza. How are you feeling today?", timestamp: getTime() }]);
//   }, []);

//   useEffect(() => {
//     chatRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const sendMessage = () => {
//     if (!input.trim() || !eliza) return;

//     const userMsg: Message = { sender: 'user', text: input, timestamp: getTime() };
//     const elizaResponse: Message = { sender: 'eliza', text: eliza.transform(input), timestamp: getTime() };

//     setMessages((prev) => [...prev, userMsg, elizaResponse]);
//     setInput('');
//   };

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <main className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 text-gray-900'} min-h-screen p-6 flex items-center justify-center transition-colors duration-300`}>
//       <section className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden">

//         {/* Header */}
//         <header className="bg-indigo-200 dark:bg-gray-700 p-6 text-center flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold">🤖 Eliza</h2>
//             <p className="text-sm">Talk to me, I’m listening...</p>
//           </div>
//           <button
//             className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
//             onClick={toggleDarkMode}
//           >
//             {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </header>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.map((msg, idx) => (
//             <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//               <div className={`max-w-xs p-3 rounded-xl shadow-md text-sm ${msg.sender === 'user' ? 'bg-blue-100 dark:bg-blue-600 text-right' : 'bg-gray-200 dark:bg-gray-600 text-left'}`}>
//                 <div>
//                   <strong>{msg.sender === 'user' ? '🧑 You' : '🤖 Eliza'}:</strong> {msg.text}
//                 </div>
//                 <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">{msg.timestamp}</div>
//               </div>
//             </div>
//           ))}
//           <div ref={chatRef} />
//         </div>

//         {/* Input */}
//         <footer className="p-4 border-t border-gray-300 dark:border-gray-600 flex gap-2">
//           <input
//             type="text"
//             className="flex-1 p-3 rounded-xl border dark:border-gray-500 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-400"
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-5 py-2 font-medium disabled:opacity-50"
//             disabled={!input.trim()}
//           >
//             Send
//           </button>
//         </footer>
//       </section>
//     </main>
//   );
// };

// export default ElizaChat;



// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import ElizaBot from 'eliza-as-promised';

// const ElizaChat = () => {
//   const [eliza, setEliza] = useState<any>(null);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<string[]>([]);
//   const chatEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const elizaInstance = new ElizaBot({
//       postTransforms: [
//         ["I am (.*)", "Why are you $1? How long have you been feeling this way?"],
//         ["I need (.*)", "Why do you need $1? How would it help you?"],
//         ["Because (.*)", "Is that the only reason? Could there be something else?"],
//         ["Hello(.*)", "Hello there! How are you feeling today?"],
//         ["My name is (.*)", "Nice to meet you, $1! What's been on your mind lately?"],
//         ["(.*) help (.*)", "I'm here to help. What exactly do you need help with?"],
//         ["I feel (.*)", "What’s making you feel $1? Let's talk about it."],
//         ["(.*)", "That's interesting. Could you explain it a bit more?"]
//       ]
//     });

//     setEliza(elizaInstance);
//     setMessages(["🤖 Eliza: Hi there! I'm Eliza. How are you feeling today?"]);
//   }, []);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim() || !eliza) return;

//     const userMessage = `🧑 You: ${input}`;
//     const elizaResponse = `🤖 Eliza: ${eliza.transform(input)}`;

//     setMessages(prev => [...prev, userMessage, elizaResponse]);
//     setInput('');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden">

//         {/* Header - now fixed */}
//         <div className="sticky top-0 bg-blue-200 p-6 text-center border-b z-10">
//           <h1 className="text-2xl font-bold text-gray-800 mb-1">🤖 Eliza - Your Friendly Listener</h1>
//           <p className="text-gray-700 text-sm">Feel free to share what's on your mind!</p>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`p-3 rounded-lg max-w-[80%] ${
//                 msg.startsWith('🧑') ? 'bg-blue-100 self-end ml-auto text-right' : 'bg-gray-100 text-left'
//               }`}
//             >
//               {msg}
//             </div>
//           ))}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <div className="p-4 border-t flex gap-2">
//           <input
//             type="text"
//             className="flex-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           />
//           <button
//             onClick={handleSend}
//             className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold"
//           >
//             Send
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ElizaChat;

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import ElizaBot from 'eliza-as-promised';

// type Message = {
//   sender: 'user' | 'eliza';
//   text: string;
// };

// const initEliza = () =>
//   new ElizaBot({
//     postTransforms: [
//       ["I am (.*)", "Why are you $1? How long have you been feeling this way?"],
//       ["I need (.*)", "Why do you need $1? How would it help you?"],
//       ["Because (.*)", "Is that the only reason? Could there be something else?"],
//       ["Hello(.*)", "Hello there! How are you feeling today?"],
//       ["My name is (.*)", "Nice to meet you, $1! What's been on your mind lately?"],
//       ["(.*) help (.*)", "I'm here to help. What exactly do you need help with?"],
//       ["I feel (.*)", "What’s making you feel $1? Let's talk about it."],
//       ["(.*)", "That's interesting. Could you explain it a bit more?"]
//     ]
//   });

// const ElizaChat = () => {
//   const [eliza, setEliza] = useState<ElizaBot | null>(null);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<Message[]>([]);
//   const chatRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const instance = initEliza();
//     setEliza(instance);
//     setMessages([{ sender: 'eliza', text: "Hi there! I'm Eliza. How are you feeling today?" }]);
//   }, []);

//   useEffect(() => {
//     chatRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const sendMessage = () => {
//     if (!input.trim() || !eliza) return;

//     const userMsg: Message = { sender: 'user', text: input };
//     const response: Message = { sender: 'eliza', text: eliza.transform(input) };

//     setMessages((prev) => [...prev, userMsg, response]);
//     setInput('');
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-6 flex items-center justify-center">
//       <section className="w-full max-w-xl bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden">

//         {/* Header */}
//         <header className="bg-indigo-200 p-6 text-center">
//           <h2 className="text-xl font-bold text-gray-800">🤖 Eliza the Listener</h2>
//           <p className="text-gray-600 text-sm">What’s on your mind today?</p>
//         </header>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div
//                 className={`p-3 max-w-xs rounded-lg shadow-md ${
//                   msg.sender === 'user'
//                     ? 'bg-blue-100 text-right'
//                     : 'bg-gray-200 text-left'
//                 }`}
//               >
//                 <span className="text-sm">{msg.sender === 'user' ? '🧑 You' : '🤖 Eliza'}: </span>
//                 <span>{msg.text}</span>
//               </div>
//             </div>
//           ))}
//           <div ref={chatRef} />
//         </div>

//         {/* Input */}
//         <footer className="p-4 border-t flex gap-2">
//           <input
//             className="flex-1 p-3 rounded-xl border focus:ring-2 focus:ring-indigo-300"
//             type="text"
//             placeholder="Type something..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//           />
//           <button
//             className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2"
//             onClick={sendMessage}
//           >
//             Send
//           </button>
//         </footer>
//       </section>
//     </main>
//   );
// };

// export default ElizaChat;
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import ElizaBot from 'eliza-as-promised';

// type Message = {
//   sender: 'user' | 'eliza';
//   text: string;
//   timestamp: string;
// };

// const initEliza = () =>
//   new ElizaBot({
//     postTransforms: [
//       ["I am (.*)", "Why are you $1? How long have you been feeling this way?"],
//       ["I need (.*)", "Why do you need $1? How would it help you?"],
//       ["Because (.*)", "Is that the only reason? Could there be something else?"],
//       ["Hello(.*)", "Hello there! How are you feeling today?"],
//       ["My name is (.*)", "Nice to meet you, $1! What's been on your mind lately?"],
//       ["(.*) help (.*)", "I'm here to help. What exactly do you need help with?"],
//       ["I feel (.*)", "What’s making you feel $1? Let's talk about it."],
//       ["(.*)", "That's interesting. Could you explain it a bit more?"]
//     ]
//   });

// const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// const ElizaChat = () => {
//   const [eliza] = useState(() => initEliza());
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<Message[]>([
//     { sender: 'eliza', text: "Hi there! I'm Eliza. How are you feeling today?", timestamp: getTime() }
//   ]);
//   const [darkMode, setDarkMode] = useState(false);

//   const chatRef = useRef<HTMLDivElement>(null);

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMsg: Message = { sender: 'user', text: input, timestamp: getTime() };
//     const elizaResponse: Message = { sender: 'eliza', text: eliza.transform(input), timestamp: getTime() };

//     setMessages((prev) => [...prev, userMsg, elizaResponse]);
//     setInput('');
//   };

//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   return (
//     <main className={`min-h-screen p-6 flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 text-gray-900'}`}>
//       <section className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden">
//         <header className="bg-indigo-200 dark:bg-gray-700 p-6 text-center flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold">🤖 Eliza</h2>
//             <p className="text-sm">Talk to me, I’m listening...</p>
//           </div>
//           <button className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded" onClick={toggleDarkMode}>
//             {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </header>

//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.map((msg, idx) => (
//             <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//               <div className={`max-w-xs p-3 rounded-xl shadow-md text-sm ${msg.sender === 'user' ? 'bg-blue-100 dark:bg-blue-600 text-right' : 'bg-gray-200 dark:bg-gray-600 text-left'}`}>
//                 <div>
//                   <strong>{msg.sender === 'user' ? '🧑 You' : '🤖 Eliza'}:</strong> {msg.text}
//                 </div>
//                 <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">{msg.timestamp}</div>
//               </div>
//             </div>
//           ))}
//           <div ref={chatRef} />
//         </div>

//         <footer className="p-4 border-t border-gray-300 dark:border-gray-600 flex gap-2">
//           <input
//             type="text"
//             className="flex-1 p-3 rounded-xl border dark:border-gray-500 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-400"
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//           />
//           <button onClick={sendMessage} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-5 py-2 font-medium disabled:opacity-50" disabled={!input.trim()}>
//             Send
//           </button>
//         </footer>
//       </section>
//     </main>
//   );
// };

// export default ElizaChat;
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import ElizaBot from 'eliza-as-promised';

// type Message = {
//   sender: 'user' | 'eliza';
//   text: string;
//   timestamp: string;
// };

// const initEliza = () =>
//   new ElizaBot({
//     postTransforms: [
//       ["I am (.*)", "Why are you $1? How long have you been feeling this way?"],
//       ["I need (.*)", "Why do you need $1? How would it help you?"],
//       ["Because (.*)", "Is that the only reason? Could there be something else?"],
//       ["Hello(.*)", "Hello there! How are you feeling today?"],
//       ["My name is (.*)", "Nice to meet you, $1! What's been on your mind lately?"],
//       ["(.*) help (.*)", "I'm here to help. What exactly do you need help with?"],
//       ["I feel (.*)", "What’s making you feel $1? Let's talk about it."],
//       ["(.*)", "That's interesting. Could you explain it a bit more?"]
//     ]
//   });

// const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// const ElizaChat = () => {
//   const [eliza] = useState(() => initEliza());
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<Message[]>(() => {
//     const savedMessages = localStorage.getItem('chatHistory');
//     return savedMessages ? JSON.parse(savedMessages) : [
//       { sender: 'eliza', text: "Hi there! I'm Eliza. How are you feeling today?", timestamp: getTime() }
//     ];
//   });
//   const [darkMode, setDarkMode] = useState(false);
//   const [isTyping, setIsTyping] = useState(false); // Typing indicator state
//   const chatRef = useRef<HTMLDivElement>(null);

//   // Save chat history to local storage
//   useEffect(() => {
//     localStorage.setItem('chatHistory', JSON.stringify(messages));
//   }, [messages]);

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMsg: Message = { sender: 'user', text: input, timestamp: getTime() };

//     setMessages((prev) => [...prev, userMsg]);

//     // Typing indicator logic
//     setIsTyping(true);
//     setTimeout(() => {
//       const elizaResponse: Message = { sender: 'eliza', text: eliza.transform(input), timestamp: getTime() };
//       setMessages((prev) => [...prev, elizaResponse]);
//       setIsTyping(false); // Stop typing indicator
//     }, 1000); // Simulating a delay for Eliza's response

//     setInput('');
//   };

//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   const clearChat = () => setMessages([]);

//   return (
//     <main className={`min-h-screen p-6 flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 text-gray-900'}`}>
//       <section className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden">
//         <header className="bg-indigo-200 dark:bg-gray-700 p-6 text-center flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold">🤖 Eliza</h2>
//             <p className="text-sm">Talk to me, I’m listening...</p>
//           </div>
//           <div className="flex gap-2">
//             <button className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded" onClick={toggleDarkMode}>
//               {darkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//             <button className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" onClick={clearChat}>
//               Clear Chat
//             </button>
//           </div>
//         </header>

//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.map((msg, idx) => (
//             <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//               <div className={`max-w-xs p-3 rounded-xl shadow-md text-sm ${msg.sender === 'user' ? 'bg-blue-100 dark:bg-blue-600 text-right' : 'bg-gray-200 dark:bg-gray-600 text-left'}`}>
//                 <div>
//                   <strong>{msg.sender === 'user' ? '🧑 You' : '🤖 Eliza'}:</strong> {msg.text}
//                 </div>
//                 <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">{msg.timestamp}</div>
//               </div>
//             </div>
//           ))}
//           {isTyping && (
//             <div className="flex justify-start">
//               <div className="max-w-xs p-3 rounded-xl shadow-md text-sm bg-gray-200 dark:bg-gray-600 text-left">
//                 <div><strong>🤖 Eliza:</strong> ...typing</div>
//               </div>
//             </div>
//           )}
//           <div ref={chatRef} />
//         </div>

//         <footer className="p-4 border-t border-gray-300 dark:border-gray-600 flex gap-2">
//           <input
//             type="text"
//             className="flex-1 p-3 rounded-xl border dark:border-gray-500 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-400"
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//           />
//           <button onClick={sendMessage} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-5 py-2 font-medium disabled:opacity-50" disabled={!input.trim()}>
//             Send
//           </button>
//         </footer>
//       </section>
//     </main>
//   );
// };

// export default ElizaChat;

'use client';

import React, { useState, useEffect, useRef } from 'react';
import ElizaBot from 'eliza-as-promised';

type Message = {
  sender: 'user' | 'eliza';
  text: string;
  timestamp: string;
  id: number;  // Unique identifier for each message
};

const initEliza = () =>
  new ElizaBot({
    postTransforms: [
      ["I am (.*)", "Why are you $1? How long have you been feeling this way?"],
      ["I need (.*)", "Why do you need $1? How would it help you?"],
      ["Because (.*)", "Is that the only reason? Could there be something else?"],
      ["Hello(.*)", "Hello there! How are you feeling today?"],
      ["My name is (.*)", "Nice to meet you, $1! What's been on your mind lately?"],
      ["(.*) help (.*)", "I'm here to help. What exactly do you need help with?"],
      ["I feel (.*)", "What’s making you feel $1? Let's talk about it."],
      ["(.*)", "That's interesting. Could you explain it a bit more?"]
    ]
  });

const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const ElizaChat = () => {
  const [eliza] = useState(() => initEliza());
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    return savedMessages ? JSON.parse(savedMessages) : [
      { sender: 'eliza', text: "Hi there! I'm Eliza. How are you feeling today?", timestamp: getTime(), id: Date.now() }
    ];
  });
  const [darkMode, setDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // Typing indicator state
  const [editMode, setEditMode] = useState<{ id: number, text: string } | null>(null); // Editing state
  const chatRef = useRef<HTMLDivElement>(null);

  // Save chat history to local storage
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: 'user', text: input, timestamp: getTime(), id: Date.now() };

    setMessages((prev) => [...prev, userMsg]);

    // Typing indicator logic
    setIsTyping(true);
    setTimeout(() => {
      const elizaResponse: Message = { sender: 'eliza', text: eliza.transform(input), timestamp: getTime(), id: Date.now() };
      setMessages((prev) => [...prev, elizaResponse]);
      setIsTyping(false); // Stop typing indicator
    }, 1000); // Simulating a delay for Eliza's response

    setInput('');
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const clearChat = () => setMessages([]);

  const startEditMessage = (id: number, text: string) => {
    setEditMode({ id, text });
    setInput(text); // Pre-fill the input with the message text to edit
  };

  const saveEditedMessage = () => {
    if (editMode && input.trim()) {
      setMessages((prev) => prev.map((msg) =>
        msg.id === editMode.id ? { ...msg, text: input, timestamp: getTime() } : msg
      ));
      setInput('');
      setEditMode(null);
    }
  };

  const deleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <main className={`min-h-screen p-6 flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 text-gray-900'}`}>
      <section className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden">
        <header className="bg-indigo-200 dark:bg-gray-700 p-6 text-center flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">🤖 Eliza</h2>
            <p className="text-sm">Talk to me, I’m listening...</p>
          </div>
          <div className="flex gap-2">
            <button className="text-xs bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded" onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" onClick={clearChat}>
              Clear Chat
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-3 rounded-xl shadow-md text-sm ${msg.sender === 'user' ? 'bg-blue-100 dark:bg-blue-600 text-right' : 'bg-gray-200 dark:bg-gray-600 text-left'}`}>
                <div>
                  <strong>{msg.sender === 'user' ? '🧑 You' : '🤖 Eliza'}:</strong> {msg.text}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">{msg.timestamp}</div>
                {msg.sender === 'user' && (
                  <div className="text-xs text-blue-500 mt-2 space-x-2">
                    <button onClick={() => startEditMessage(msg.id, msg.text)}>Edit</button>
                    <button onClick={() => deleteMessage(msg.id)}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs p-3 rounded-xl shadow-md text-sm bg-gray-200 dark:bg-gray-600 text-left">
                <div><strong>🤖 Eliza:</strong> ...typing</div>
              </div>
            </div>
          )}
          <div ref={chatRef} />
        </div>

        <footer className="p-4 border-t border-gray-300 dark:border-gray-600 flex gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-xl border dark:border-gray-500 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-400"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (editMode ? saveEditedMessage() : sendMessage())}
          />
          <button onClick={editMode ? saveEditedMessage : sendMessage} className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-5 py-2 font-medium disabled:opacity-50" disabled={!input.trim()}>
            {editMode ? 'Save Edit' : 'Send'}
          </button>
        </footer>
      </section>
    </main>
  );
};

export default ElizaChat;
