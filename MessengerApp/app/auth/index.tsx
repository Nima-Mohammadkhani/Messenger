import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const Index = () => {
  const router = useRouter();

  const features = [
    {
      icon: "shield-checkmark",
      title: "End-to-End Encryption",
      description: "Your messages are secure and private",
    },
    {
      icon: "flash",
      title: "Lightning Fast",
      description: "Instant message delivery worldwide",
    },
    {
      icon: "people",
      title: "Group Chats",
      description: "Create groups with up to 256 members",
    },
  ];

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-6 bg-white">
      <ScrollView
        className="flex-1 w-full"
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col justify-center items-center gap-6">
          <View className="flex-col justify-center items-center gap-4">
            <View className="flex justify-center bg-blue-500 rounded-xl p-4">
              <Icon name="chatbubbles-outline" className="text-white" />
            </View>
            <View className="flex-col justify-center items-center gap-2">
              <Text className="font-bold text-2xl text-center text-gray-900">
                Welcome to ChatApp
              </Text>
              <Text className="font-light text-gray-400 text-center">
                Connect with friends and family with our secure, fast messaging
                platform
              </Text>
            </View>
          </View>

          <View className="flex-col items-start gap-4 w-full max-w-4xl">
            {features.map((item, i) => (
              <View key={i} className="flex-row items-center gap-4">
                <View className="flex justify-center items-center rounded-full border-2 border-blue-500 bg-gray-100 p-2">
                  <Icon name={item.icon} className=" text-blue-500" />
                </View>
                <View className="flex-col gap-1">
                  <Text className="font-bold text-sm text-gray-900">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-gray-400">
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}

            <View className="w-full">
              <Button
                title="Get Started"
                className="bg-blue-500 text-white w-full"
                size="md"
                onPress={() => router.push("/auth/singIn")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
