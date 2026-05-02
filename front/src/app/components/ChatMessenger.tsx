import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatMessenger() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour! 👋 Bienvenue chez Smart-Économie. Comment puis-je vous aider avec votre assurance auto?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'Merci pour votre message! Un agent vous répondra dans les prochaines minutes.',
        'Nous sommes ici pour vous aider. Pouvez-vous nous donner plus de détails?',
        'Excellente question! Nos experts en assurance auto vous répondront rapidement.',
        'Je note votre demande. Nos équipes vont vous contacter bientôt.',
        'Comment puis-je vous assister davantage avec votre assurance automobile?',
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#228B22] hover:bg-[#1a6b1a] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40"
        aria-label="Ouvrir le chat"
      >
        <i className="fa-solid fa-message text-2xl"></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl w-96 max-w-sm h-96 flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-[#228B22] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Support Smart-Économie</h3>
              <p className="text-xs text-white">En ligne et prêt à aider</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-[#1a6b1a] rounded-full p-2 transition"
              aria-label="Fermer le chat"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#228B22] text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user'
                        ? 'text-white'
                        : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 p-3 bg-white rounded-b-2xl flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Votre message..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#228B22] text-sm disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-[#228B22] text-white p-2 rounded-lg hover:bg-[#1a6b1a] transition disabled:bg-gray-300"
              aria-label="Envoyer"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
