import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const SignUp = () => {
  const router = useRouter();
  
  const buttons = [
    {
      title: "Create Account",
      className: "bg-blue-500 text-white w-full",
      onPress: () => router.push("/auth/otp"),
    },
    {
      title: "Already have an account? Sign in",
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
              title="Create Account" 
              onPress={() => router.back()} 
            />
          </View>

          <View className="flex-col gap-2 rounded-xl border border-gray-300 p-4 w-full max-w-4xl">
            <View>
              <Text className="font-bold text-lg text-gray-900">Sign up</Text>
              <Text className="font-light text-gray-400">
                Create your account to get started
              </Text>
            </View>

            <View>
              <Input label="Phone Number" />
            </View>

            <View className="flex-row items-center my-2">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="mx-4 text-sm text-gray-500">or</Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            <View>
              <Input label="Email" />
            </View>

            <View>
              <Input label="Password" />
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

export default SignUp;
