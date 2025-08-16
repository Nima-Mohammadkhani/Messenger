import ChatList from "../components/ChatList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chat } from "../types/chat";
import ChatWindow from "../components/ChatWindow";

const Index = () => {
  const navigate = useNavigate();
  const [isMobileView, setIsMobileView] = useState(false);

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleChatSelect = (chatId: string) => {
    navigate(`/chat/${chatId}`);
  };

  if (isMobileView) {
    return (
      <section className="h-screen">
          <div className="flex-1 h-full">
            <ChatList
              chats={chats}
              selectedChatId={null}
              onChatSelect={handleChatSelect}
            />
        </div>
      </section>
    );
  }

  return (
    <section className="h-screen">
      <div className="h-screen flex min-w-0 w-full">
        <div className="w-80 flex-shrink-0 h-full">
          <ChatList
            chats={chats}
            selectedChatId={null}
            onChatSelect={handleChatSelect}
          />
        </div>
        <div className="flex-1 min-w-0">
          <ChatWindow
            selectedChat={null}
            messages={[]}
            onSendMessage={() => {}}
            onBackToChats={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;