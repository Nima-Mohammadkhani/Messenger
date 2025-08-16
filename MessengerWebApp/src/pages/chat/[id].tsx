import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatWindow from "../../components/ChatWindow";
import ChatList from "../../components/ChatList";
import { Chat, Message } from "../../types/chat";

const ChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);
  const [showChatList, setShowChatList] = useState(false);

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
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (mobile) {
        setShowChatList(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleChatSelect = (chatId: string) => {
    if (chatId !== id) {
      navigate(`/chat/${chatId}`);
    } else if (isMobileView && showChatList) {
      setShowChatList(false);
    }
  };

  const handleMobileChatSelect = (chatId: string) => {
    if (chatId !== id) {
      navigate(`/chat/${chatId}`);
    } else {
      setShowChatList(false);
    }
  };

  const handleBackToChats = () => {
      navigate("/");
  };

  const handleSendMessage = (text: string) => {
    if (id) {
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
        [id]: [...(prev[id] || []), newMessage],
      }));
    }
  };

  const selectedChat = chats.find((chat) => chat.id === id) || null;
  const currentMessages = id ? messages[id] || [] : [];

  useEffect(() => {
    if (id && !selectedChat) {
      navigate("/");
    }
  }, [id, selectedChat, navigate]);

  useEffect(() => {
    if (isMobileView && id) {
      setShowChatList(false);
    }
  }, [id, isMobileView]);

  useEffect(() => {
    if (isMobileView) {
      setShowChatList(false);
    }
  }, [isMobileView]);

  if (!id || !selectedChat) {
    return null;
  }

  if (isMobileView) {
    if (showChatList) {
      return (
        <div className="h-screen">
          <div className="flex items-center p-4 border-b border-gray-200 bg-white">
            <button
              onClick={() => navigate("/")}
              className="p-2 hover:bg-gray-100 rounded-full mr-2"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
            <button
              onClick={() => setShowChatList(false)}
              className="ml-auto p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
          <ChatList
            chats={chats}
            selectedChatId={id}
            onChatSelect={handleMobileChatSelect}
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
          selectedChatId={id}
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

export default ChatPage;
