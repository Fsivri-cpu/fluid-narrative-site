
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  text: string;
  isBot: boolean;
  id: number;
}

interface ChatInterfaceProps {
  maxTokens: number;
  temperature: number;
}

export const ChatInterface = ({ maxTokens, temperature }: ChatInterfaceProps) => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { text: t('chat.greeting'), isBot: true, id: 1 }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessageId = messages.length + 1;
    setMessages(prev => [...prev, { text: newMessage, isBot: false, id: userMessageId }]);
    setNewMessage("");

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = t('chat.response');
      setMessages(prev => [...prev, { text: botResponse, isBot: true, id: userMessageId + 1 }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="relative h-[600px] chat-container">
      <div className="chat-glow-effect"></div>
      <div className="relative h-full rounded-lg overflow-hidden bg-gray-900/95 backdrop-blur-xl border border-blue-500/20 z-10">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-700/20 bg-gray-900/90">
          <h2 className="text-xl font-semibold text-white">{t('chat.title')}</h2>
          <p className="text-gray-300/80 text-sm">{t('chat.subtitle')}</p>
        </div>

        {/* Messages Container */}
        <div className="flex-1 h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg backdrop-blur-sm ${
                  message.isBot
                    ? 'bg-gray-800/80 text-white rounded-tl-none border border-gray-600/30'
                    : 'bg-blue-600/30 text-white rounded-tr-none border border-blue-400/30'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800/80 text-white p-3 rounded-lg rounded-tl-none border border-gray-600/30">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700/20 bg-gray-900/90">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('chat.placeholder')}
              className="flex-1 bg-gray-800/60 border-gray-700/30 text-white placeholder:text-gray-400"
            />
            <Button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
