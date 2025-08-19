import Icon from "./ui/Icon";
import { Chat } from "../types/chat";
import { AnimatePresence, motion } from "framer-motion";
interface ChatListProps {
  chats: Chat[];
  selectedChatId: string | null;
  onChatSelect: (chatId: string) => void;
  showHeader?: boolean;
  showBorderRight?: boolean;
}

const ChatList = ({ chats, selectedChatId, onChatSelect }: ChatListProps) => {
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn" as const,
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

  return (
    <motion.section
      className="w-full h-full flex flex-col bg-white border-r border-gray-200"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
        <Icon name="Search" className="w-5 h-5 text-gray-600" />
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <motion.div
            key={chat.id}
            variants={itemVariant}
            onClick={() => onChatSelect(chat.id)}
            className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedChatId === chat.id
                ? "bg-blue-50 border-r-2 border-blue-500"
                : ""
            }`}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                {chat.avatar ? (
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-600 font-medium">
                    {chat.name.charAt(0)}
                  </span>
                )}
              </div>
              {chat.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-gray-900 truncate">
                  {chat.name}
                </h3>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {chat.time}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 truncate">
                  {chat.lastMessage}
                </p>
                {chat.unreadCount > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ChatList;
