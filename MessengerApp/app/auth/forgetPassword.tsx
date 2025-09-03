import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const ForgetPassword = () => {
  const router = useRouter();
  
  const buttons = [
    {
      title: "Send Reset Link",
      className: "bg-blue-500 text-white w-full",
      onPress: () => router.push("/auth/singIn"),
    },
    {
      title: "Back to Sign In",
      className: "w-full",
      onPress: () => router.push("/auth/singIn"),
    },
  ];

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-6 bg-white">
      <ScrollView 
        className="flex-1 w-full"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col gap-4 w-full max-w-4xl">
          <View className="self-start">
            <Button
              iconLeft="arrow-back"
              title="Reset Password"
              onPress={() => router.back()}
            />
          </View>

          <View className="flex-col gap-4 rounded-xl border border-gray-300 p-4 w-full max-w-4xl">
            <View>
              <Text className="font-bold text-lg text-gray-900">
                Forgot Your Password?
              </Text>
              <Text className="font-light text-gray-400">
                Enter your email address and we'll send you a reset link
              </Text>
            </View>

            <View>
              <Input label="Email" />
            </View>

            {buttons.map((item, i) => (
              <View key={i}>
                <Button
                  title={item.title}
                  className={item.className}
                  size="md"
                  onPress={item.onPress}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPassword;
