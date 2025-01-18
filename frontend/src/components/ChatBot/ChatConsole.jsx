import React, { useState } from 'react';

const ChatConsole = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'AI',
      content: 'Namaste! I\'m your spiritual guide. How can I assist you on your spiritual journey today?',
      time: '10:30 AM',
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: 'User',
        content: message,
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <section id="chat_console" className="pt-16 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-8 bg-white rounded-lg border border-neutral-200/40">
          {/* Chat Header */}
          <div className="border-b border-neutral-200/40 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 text-xl">🔮</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-gray-800">SoulBuddy AI</h2>
                <p className="text-sm text-gray-600">Your spiritual guide</p>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Online</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[calc(100vh-350px)] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start space-x-3 ${msg.sender === 'User' ? 'justify-end' : ''}`}>
                {msg.sender === 'AI' ? (
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 text-sm">AI</span>
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img
                      src="https://avatar.iran.liara.run/public"
                      alt="User"
                      className="w-8 h-8 rounded-full transition-opacity duration-300 opacity-100"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={`bg-${msg.sender === 'AI' ? 'gray' : 'indigo'}-100 rounded-lg p-3 max-w-[80%]`}>
                  <p className={`${msg.sender === 'AI' ? 'text-gray-800' : 'text-white'}`}>{msg.content}</p>
                  <span className="text-xs text-gray-500 mt-1 block">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t border-neutral-200/40 p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Ask your spiritual question..."
                className="flex-1 border border-neutral-200 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-600"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Questions */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200/40">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Questions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors text-gray-700">
                What's my lucky color today?
              </button>
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors text-gray-700">
                Recommend a morning ritual
              </button>
              <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors text-gray-700">
                Best time for important decisions?
              </button>
            </div>
          </div>

          {/* Recent Topics */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200/40">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Topics</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="mr-2">🕉️</span>
                <span>Meditation techniques</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">💎</span>
                <span>Gemstone recommendations</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">🌟</span>
                <span>Career guidance</span>
              </div>
            </div>
          </div>

          {/* Chat Stats */}
          <div className="bg-white p-6 rounded-lg border border-neutral-200/40">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Insights</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Questions Asked</span>
                <span className="font-medium text-indigo-600">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Predictions Accuracy</span>
                <span className="font-medium text-indigo-600">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Helpful Responses</span>
                <span className="font-medium text-indigo-600">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatConsole;
