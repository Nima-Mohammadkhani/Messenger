import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/ui/Icon";
import { Chat } from "@/types/chat";

interface ChatListProps {
  chats: Chat[];
  selectedChatId: string | null;
  onChatSelect: (chatId: string) => void;
  showHeader?: boolean;
  showBorderRight?: boolean;
}

const ChatList = ({ chats, selectedChatId, onChatSelect }: ChatListProps) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 border-r border-gray-200">
        <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
          <Text className="text-xl font-semibold text-gray-800">Messages</Text>
          <Icon name="Search" className="w-5 h-5 text-gray-600" />
        </View>

        <ScrollView className="flex-1">
          {chats.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              onPress={() => onChatSelect(chat.id)}
              className={`flex-row items-center gap-3 p-4 ${
                selectedChatId === chat.id
                  ? "bg-blue-50 border-r-2 border-blue-500"
                  : ""
              }`}
            >
              <View className="relative">
                <View className="w-12 h-12 rounded-full bg-gray-300 items-center justify-center">
                  {chat.avatar ? (
                    <Image
                      source={{ uri: chat.avatar }}
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    <Text className="text-gray-600 font-medium">
                      {chat.name.charAt(0)}
                    </Text>
                  )}
                </View>
                {chat.isOnline && (
                  <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </View>

              <View className="flex-1 min-w-0">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="font-medium text-gray-900 truncate">
                    {chat.name}
                  </Text>
                  <Text className="text-xs text-gray-500 whitespace-nowrap">
                    {chat.time}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm text-gray-600 truncate">
                    {chat.lastMessage}
                  </Text>
                  {chat.unreadCount > 0 && (
                    <View className="bg-blue-500 rounded-full px-2 py-1 min-w-[20px] items-center justify-center">
                      <Text className="text-white text-xs text-center">
                        {chat.unreadCount}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChatList;
