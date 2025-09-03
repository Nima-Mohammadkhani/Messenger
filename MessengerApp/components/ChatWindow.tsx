import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/ui/Icon";
import { Message } from "@/types/chat";

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

  const buttons = [
    { name: "call", className: "w-5 h-5 text-gray-600" },
    { name: "videocam", className: "w-5 h-5 text-gray-600" },
    { name: "ellipsis-vertical", className: "w-5 h-5 text-gray-600" },
  ];

  if (!selectedChat) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-gray-50">
        <Icon
          name="chatbubble-outline"
          className="w-16 h-16 text-gray-300 mb-4"
        />
        <Text className="text-lg text-gray-500">Select a chat</Text>
        <Text className="text-sm text-gray-500 mt-1">
          Choose a chat to start a conversation
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View className="flex-row items-center px-4 py-2 border-b border-gray-200 bg-white">
          {onBackToChats && (
            <TouchableOpacity
              onPress={onBackToChats}
              className="p-2 rounded-full"
            >
              <Icon name="arrow-back" className="w-5 h-5 text-gray-600" />
            </TouchableOpacity>
          )}
          <View className="relative ml-2">
            <View className="w-10 h-10 rounded-full bg-gray-300 items-center justify-center">
              {selectedChat.avatar ? (
                <Image
                  source={{ uri: selectedChat.avatar }}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <Text className="text-gray-600 font-medium">
                  {selectedChat.name.charAt(0)}
                </Text>
              )}
            </View>
            {selectedChat.isOnline && (
              <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
            )}
          </View>
          <View className="flex-1 ml-3">
            <Text className="font-semibold text-base text-gray-900">
              {selectedChat.name}
            </Text>
            <Text className="text-sm text-gray-500">
              {selectedChat.isOnline ? "Online" : "Offline"}
            </Text>
          </View>
          <View className="flex-row space-x-2">
            {buttons.map((item, i) => (
              <TouchableOpacity key={i} className="p-2 rounded-full">
                <Icon name={item.name} className={item.className} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ScrollView
          className="flex-1 p-4 bg-gray-50"
          contentContainerStyle={{ paddingBottom: 100 }}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((message) => (
            <View
              key={message.id}
              className={`mb-2 p-3 rounded-lg ${
                message.sender === "me"
                  ? "bg-blue-500 self-end"
                  : "bg-gray-200 self-start"
              }`}
            >
              <Text
                className={`${
                  message.sender === "me" ? "text-white" : "text-gray-800"
                }`}
              >
                {message.text}
              </Text>
              <Text className="text-xs text-gray-500 mt-1">
                {message.timestamp}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View className="px-4 border-t border-gray-200 bg-white p-2">
          <View className="flex-row justify-center items-center gap-3">
            <View className="flex-1">
              <TextInput
                value={messageText}
                onChangeText={setMessageText}
                placeholder="Write your message..."
                className="px-4 py-3 border border-gray-300 rounded-lg"
                multiline
                style={{ maxHeight: 120, minHeight: 44 }}
                onSubmitEditing={handleSendMessage}
                returnKeyType="send"
              />
            </View>
            <TouchableOpacity
              onPress={handleSendMessage}
              disabled={!messageText.trim()}
              className={`rounded-full p-3 shadow-lg ${
                messageText.trim() ? "bg-blue-500" : "bg-gray-300 opacity-50"
              }`}
            >
              <Icon name="send" className="w-5 h-5 text-white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatWindow;
