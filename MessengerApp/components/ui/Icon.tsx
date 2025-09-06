import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface IconProps {
  name: keyof typeof Ionicons.glyphMap;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  label?: string;
  onClick?: () => void;
  className?: string;
}

const sizeMap: Record<string, number> = {
  sm: 16,
  md: 20,
  lg: 28,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  color = "black",
  label,
  onClick,
  className = "",
}) => {
  const finalSize = typeof size === "number" ? size : sizeMap[size];
  const combinedClassName = `flex-row items-center ${className}`;

  if (onClick) {
    return (
      <TouchableOpacity
        onPress={onClick}
        className={combinedClassName}
        activeOpacity={0.7}
      >
        <Ionicons name={name} size={finalSize} color={color} />
        {label && <Text className="ml-2 text-sm text-gray-700">{label}</Text>}
      </TouchableOpacity>
    );
  }

  return (
    <View className={combinedClassName}>
      <Ionicons name={name} size={finalSize} color={color} />
      {label && <Text className="ml-2 text-sm text-gray-700">{label}</Text>}
    </View>
  );
};

export default Icon;
