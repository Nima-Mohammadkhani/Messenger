import { useState, useEffect } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar: string;
  isOnline: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: string;
  isRead: boolean;
}

const Messenger = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showChatList, setShowChatList] = useState(true);

  const [chats] = useState<Chat[]>([
    {
      id: "1",
      name: "Ahmed Mohammadi",
      lastMessage: "Hello, how are you?",
      time: "10:25",
      unreadCount: 2,
      avatar: "",
      isOnline: true,
    },
    {
      id: "2",
      name: "Fatima Ahmadi",
      lastMessage: "Thank you for your help",
      time: "09:15",
      unreadCount: 0,
      avatar: "",
      isOnline: false,
    },
    {
      id: "3",
      name: "Ali Rezaei",
      lastMessage: "See you tomorrow",
      time: "08:30",
      unreadCount: 5,
      avatar: "",
      isOnline: true,
    },
    {
      id: "4",
      name: "Maryam Karimi",
      lastMessage: "Yes, definitely",
      time: "Yesterday",
      unreadCount: 0,
      avatar: "",
      isOnline: false,
    },
  ]);

  const [messages, setMessages] = useState<{ [chatId: string]: Message[] }>({
    "1": [
      {
        id: "1",
        text: "Hello, how are you?",
        sender: "other",
        timestamp: "10:25",
        isRead: true,
      },
      {
        id: "2",
        text: "Thanks, I'm good. How about you?",
        sender: "me",
        timestamp: "10:26",
        isRead: true,
      },
      {
        id: "3",
        text: "I'm good, thanks",
        sender: "other",
        timestamp: "10:27",
        isRead: false,
      },
    ],
    "2": [
      {
        id: "1",
        text: "Thank you for your help",
        sender: "other",
        timestamp: "09:15",
        isRead: true,
      },
      {
        id: "2",
        text: "You're welcome, always at your service",
        sender: "me",
        timestamp: "09:16",
        isRead: true,
      },
    ],
    "3": [
      {
        id: "1",
        text: "See you tomorrow",
        sender: "other",
        timestamp: "08:30",
        isRead: true,
      },
      {
        id: "2",
        text: "Yes, definitely",
        sender: "me",
        timestamp: "08:31",
        isRead: true,
      },
      {
        id: "3",
        text: "What time?",
        sender: "me",
        timestamp: "08:32",
        isRead: false,
      },
    ],
    "4": [
      {
        id: "1",
        text: "Yes, definitely",
        sender: "other",
        timestamp: "Yesterday",
        isRead: true,
      },
    ],
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowChatList(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
    if (isMobileView) {
      setShowChatList(false);
    }
  };

  const handleBackToChats = () => {
    setShowChatList(true);
    setSelectedChatId(null);
  };

  const handleSendMessage = (text: string) => {
    if (selectedChatId) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: "me",
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isRead: false,
      };

      setMessages((prev) => ({
        ...prev,
        [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
      }));
    }
  };

  const selectedChat = selectedChatId
    ? chats.find((chat) => chat.id === selectedChatId) || null
    : null;
  const currentMessages = selectedChatId ? messages[selectedChatId] || [] : [];

  if (isMobileView) {
    if (showChatList) {
      return (
        <div className="h-screen">
          <ChatList
            chats={chats}
            selectedChatId={selectedChatId}
            onChatSelect={handleChatSelect}
          />
        </div>
      );
    } else {
      return (
        <div className="h-screen">
          <ChatWindow
            selectedChat={selectedChat}
            messages={currentMessages}
            onSendMessage={handleSendMessage}
            onBackToChats={handleBackToChats}
          />
        </div>
      );
    }
  }
  return (
    <div className="h-screen flex min-w-0 w-full">
      <div className="w-80 flex-shrink-0">
        <ChatList
          chats={chats}
          selectedChatId={selectedChatId}
          onChatSelect={handleChatSelect}
        />
      </div>
      <div className="flex-1 min-w-0">
        <ChatWindow
          selectedChat={selectedChat}
          messages={currentMessages}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default Messenger;
