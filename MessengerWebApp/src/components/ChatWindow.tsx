import Icon from "./ui/Icon";
import { useState } from "react";
import { Message } from "../types/chat";
import { motion } from "framer-motion";
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

  const buttons = [
    { name: "call", className: "w-5 h-5 text-gray-600" },
    { name: "videocam", className: "w-5 h-5 text-gray-600" },
    { name: "ellipsis-vertical", className: "w-5 h-5 text-gray-600" },
  ];

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        delay: 0.2,
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeIn" as const, duration: 0.4 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut" as const, duration: 0.4, delay },
    }),
  };

  if (!selectedChat) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center text-gray-500"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { ease: "easeOut", duration: 0.4, delay: 0.2 },
            }}
          >
            <Icon
              name="chatbubble-outline"
              className="w-16 mx-auto text-gray-300"
            />
          </motion.div>

          <motion.p variants={fadeInUp} custom={0.4} className="text-lg">
            Select a chat
          </motion.p>

          <motion.p variants={fadeInUp} custom={0.6} className="text-sm">
            Choose a chat to start a conversation
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full h-full flex flex-col bg-white min-w-0"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
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
          <h3 className="font-semibold text-xs sm:text-base text-gray-900">
            {selectedChat.name}
          </h3>
          <p className="text-xs sm:text-base text-gray-500">
            {selectedChat.isOnline ? "Online" : "Offline"}
          </p>
        </div>
        <div className="flex gap-2">
          {buttons.map((item, i) => (
            <motion.button
              key={i}
              variants={itemVariant}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Icon name={item.name} className={item.className} />
            </motion.button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-w-0 overflow-x-hidden">
        {messages.map((message) => (
          <motion.div key={message.id} variants={itemVariant}>
            <div
              className={`chat ${
                message.sender === "me" ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-footer">
                <time className="text-xs opacity-50">{message.timestamp}</time>
              </div>
              <div className="chat-bubble">{message.text}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="sticky bottom-0 p-4 border-t border-gray-200 bg-white">
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
            <Icon name="send" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatWindow;
