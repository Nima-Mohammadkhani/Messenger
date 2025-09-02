import React from 'react';
import { View, Text } from 'react-native';

export default function NativeWindExample() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-50 p-4">
      <View className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <Text className="text-2xl font-bold text-gray-800 mb-4 text-center">
          NativeWind Example
        </Text>
        <Text className="text-gray-600 mb-4 text-center">
          This component uses Tailwind CSS classes through NativeWind!
        </Text>
        <View className="bg-blue-500 rounded-md py-3 px-4">
          <Text className="text-white font-semibold text-center">
            Styled with Tailwind
          </Text>
        </View>
      </View>
    </View>
  );
}
