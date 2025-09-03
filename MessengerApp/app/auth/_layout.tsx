import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="singIn" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="forgetPassword" />
      <Stack.Screen name="otp" />
    </Stack>
  );
}
