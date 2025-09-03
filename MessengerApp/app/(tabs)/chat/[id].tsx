import { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Dimensions } from "react-native";
import ChatWindow from "@/components/ChatWindow";
import ChatList from "@/components/ChatList";
import { Chat, Message } from "@/types/chat";

const ChatPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
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
      const { width } = Dimensions.get("window");
      const mobile = width < 768;
      setIsMobileView(mobile);
      if (mobile) {
        setShowChatList(false);
      }
    };

    checkScreenSize();
    const subscription = Dimensions.addEventListener("change", checkScreenSize);
    return () => subscription?.remove();
  }, []);

  const handleChatSelect = (chatId: string) => {
    if (chatId !== id) {
      router.push(`/(tabs)/chat/${chatId}` as any);
    } else if (isMobileView && showChatList) {
      setShowChatList(false);
    }
  };

  const handleMobileChatSelect = (chatId: string) => {
    if (chatId !== id) {
      router.push(`/(tabs)/chat/${chatId}` as any);
    } else {
      setShowChatList(false);
    }
  };

  const handleBackToChats = () => {
    router.push("/(tabs)" as any);
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
      router.push("/(tabs)" as any);
    }
  }, [id, selectedChat, router]);

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
        <View className="flex-1">
          <ChatList
            chats={chats}
            selectedChatId={id}
            onChatSelect={handleMobileChatSelect}
          />
        </View>
      );
    } else {
      return (
        <View className="flex-1">
          <ChatWindow
            selectedChat={selectedChat}
            messages={currentMessages}
            onSendMessage={handleSendMessage}
            onBackToChats={handleBackToChats}
          />
        </View>
      );
    }
  }

  return (
    <View className="flex-1 flex-row">
      <View className="w-80">
        <ChatList
          chats={chats}
          selectedChatId={id}
          onChatSelect={handleChatSelect}
        />
      </View>
      <View className="flex-1">
        <ChatWindow
          selectedChat={selectedChat}
          messages={currentMessages}
          onSendMessage={handleSendMessage}
        />
      </View>
    </View>
  );
};

export default ChatPage;
