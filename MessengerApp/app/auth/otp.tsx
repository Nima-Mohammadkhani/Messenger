import { useState, useRef } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";

const Otp = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<(TextInput | null)[]>([]);

  const buttons = [
    {
      title: "Verify & Continue",
      className: "bg-blue-500 text-white w-full",
      onPress: () => router.push("/(tabs)"),
    },
    {
      title: "Didn't receive code? Resend",
      className: "w-full",
      onPress: () => router.push("/auth/singIn"),
    },
  ];

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

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
              iconLeft="ArrowLeft"
              title="Verification"
              onPress={() => router.back()}
            />
          </View>

          <View className="flex-col gap-4 rounded-xl border border-gray-300 p-4 w-full max-w-4xl">
            <Text className="font-bold text-lg text-gray-900">
              Enter Verification Code
            </Text>
            <Text className="font-light text-gray-400">
              We sent a 4-digit code to 0
            </Text>

            <View className="flex-row gap-2 justify-center">
              {otp.map((digit, i) => (
                <View key={i}>
                  <TextInput
                    value={digit}
                    ref={(el) => (inputsRef.current[i] = el)}
                    className="w-12 h-12 border border-gray-300 text-center text-lg rounded"
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChange(value, i)}
                    onKeyPress={(e) => handleKeyPress(e, i)}
                  />
                </View>
              ))}
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

export default Otp;
