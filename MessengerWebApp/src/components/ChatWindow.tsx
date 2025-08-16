import Icon from "./ui/Icon";
import { useState } from "react";
import { Message } from "../types/chat";

interface ChatWindowProps {
  selectedChat: {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
  } | null;
  messages: Message[];
  onSendMessage: (text: string) => void;
  onBackToChats?: () => void;
}

const ChatWindow = ({
  selectedChat,
  messages,
  onSendMessage,
  onBackToChats,
}: ChatWindowProps) => {
  const [messageText, setMessageText] = useState("");

  const handleSendMessage = () => {
    if (messageText.trim()) {
      onSendMessage(messageText.trim());
      setMessageText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedChat) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-500">
          <Icon
            name="MessageCircle"
            className="w-16 mx-auto text-gray-300"
          />
          <p className="text-lg">Select a chat</p>
          <p className="text-sm">Choose a chat to start a conversation</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-white min-w-0">
      <div className="flex items-center gap-3 py-2 px-4 border-b border-gray-200 bg-white">
        {onBackToChats && (
          <button
            onClick={onBackToChats}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
          >
            <Icon name="ArrowLeft" className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            {selectedChat.avatar ? (
              <img
                src={selectedChat.avatar}
                alt={selectedChat.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-600 font-medium">
                {selectedChat.name.charAt(0)}
              </span>
            )}
          </div>
          {selectedChat.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
          <p className="text-sm text-gray-500">
            {selectedChat.isOnline ? "Online" : "Offline"}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Icon name="Phone" className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Icon name="Video" className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Icon name="MoreVertical" className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-w-0 overflow-x-hidden">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-none px-4 py-2 rounded-lg ${
                message.sender === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-900 border border-gray-200"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <div
                className={`flex items-center gap-1 mt-1 ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <span className="text-xs opacity-70">{message.timestamp}</span>
                {message.sender === "me" && (
                  <Icon
                    name={message.isRead ? "CheckCheck" : "Check"}
                    className="w-3 h-3 opacity-70"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={1}
              style={{ minHeight: "44px", maxHeight: "120px" }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!messageText.trim()}
            className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="Send" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
