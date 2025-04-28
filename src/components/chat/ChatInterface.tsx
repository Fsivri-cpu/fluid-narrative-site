
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Giselle, your AI assistant. How can I help you today?", isBot: true, id: 1 }
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
      const botResponse = "Thank you for your message. I'm a demo version of Giselle, designed to showcase our AI capabilities. Would you like to learn more about our full-featured solution?";
      setMessages(prev => [...prev, { text: botResponse, isBot: true, id: userMessageId + 1 }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="relative h-[600px] rounded-lg overflow-hidden bg-gray-50/5 backdrop-blur-xl border border-gray-700/30">
      {/* Glowing effect */}
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-600/20 blur-xl" />
      
      <div className="flex flex-col h-full relative z-10">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-700/20 bg-gray-900/20">
          <h2 className="text-xl font-semibold text-white">Chat with Giselle</h2>
          <p className="text-gray-300/80 text-sm">Experience our AI assistant in action</p>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg backdrop-blur-sm ${
                  message.isBot
                    ? 'bg-gray-800/40 text-white rounded-tl-none border border-gray-700/30'
                    : 'bg-blue-500/20 text-white rounded-tr-none border border-blue-400/30'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800/40 text-white p-3 rounded-lg rounded-tl-none border border-gray-700/30">
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
        <div className="p-4 border-t border-gray-700/20 bg-gray-900/20">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-gray-900/40 border-gray-700/30 text-white placeholder:text-gray-400"
            />
            <Button
              onClick={handleSend}
              className="bg-blue-500/80 hover:bg-blue-600/80 text-white backdrop-blur-sm"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
