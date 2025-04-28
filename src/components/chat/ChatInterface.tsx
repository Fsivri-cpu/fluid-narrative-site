
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  text: string;
  isBot: boolean;
  id: number;
}

export const ChatInterface = () => {
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
    <div className="h-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-xl border border-blue-700">
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="p-4 border-b border-blue-700/50">
          <h2 className="text-xl font-semibold text-white">Chat with Giselle</h2>
          <p className="text-blue-100/80 text-sm">Experience our AI assistant in action</p>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-blue-800/50 text-white rounded-tl-none'
                    : 'bg-white/10 text-white rounded-tr-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-blue-800/50 text-white p-3 rounded-lg rounded-tl-none">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-blue-700/50">
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-blue-950/50 border-blue-700/50 text-white placeholder:text-blue-200/50"
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
