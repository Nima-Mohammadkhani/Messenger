import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";
import { Chat } from "@/types/chat";

const Index = () => {
  const router = useRouter();
  const [isMobileView, setIsMobileView] = useState(true);

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
    const checkScreenSize = () =>
      setIsMobileView(Dimensions.get("window").width < 768);

    checkScreenSize();
    const subscription = Dimensions.addEventListener("change", checkScreenSize);

    return () => subscription?.remove();
  }, []);

  const handleChatSelect = (chatId: string) => {
    router.push(`/(tabs)/chat/${chatId}` as any);
  };

  if (isMobileView) {
    return (
      <ChatList
        chats={chats}
        selectedChatId={null}
        onChatSelect={handleChatSelect}
      />
    );
  }

  return (
    <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
      <View className="flex-1 flex-row">
        <View className="w-80 flex-shrink-0">
          <ChatList
            chats={chats}
            selectedChatId={null}
            onChatSelect={handleChatSelect}
          />
        </View>
        <View className="flex-1">
          <ChatWindow
            selectedChat={null}
            messages={[]}
            onSendMessage={() => {}}
            onBackToChats={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
