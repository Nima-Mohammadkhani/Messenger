import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface IconProps {
  name: string;
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

// Map custom icon names to Ionicons names
const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  // Chat icons
  "MessageCircle": "chatbubble-outline",
  "MessageSquare": "chatbubbles-outline",
  "Send": "send",
  "Search": "search",
  
  // Navigation icons
  "ArrowLeft": "arrow-back",
  "ArrowRight": "arrow-forward",
  
  // Action icons
  "Phone": "call",
  "Video": "videocam",
  "MoreVertical": "ellipsis-vertical",
  
  // Feature icons
  "Shield": "shield-checkmark",
  "Zap": "flash",
  "Users": "people",
  
  // Other common icons
  "Home": "home",
  "Settings": "settings",
  "Profile": "person",
  "Add": "add",
  "Close": "close",
  "Check": "checkmark",
  "Edit": "create",
  "Delete": "trash",
  "Heart": "heart",
  "Star": "star",
  "Share": "share",
  "Download": "download",
  "Upload": "cloud-upload",
  "Camera": "camera",
  "Image": "image",
  "File": "document",
  "Link": "link",
  "Copy": "copy",
  "Paste": "clipboard",
  "Cut": "cut",
  "Undo": "arrow-undo",
  "Redo": "arrow-redo",
  "Refresh": "refresh",
  "Loading": "reload",
  "Warning": "warning",
  "Error": "alert-circle",
  "Info": "information-circle",
  "Success": "checkmark-circle",
  "Lock": "lock-closed",
  "Unlock": "lock-open",
  "Eye": "eye",
  "EyeOff": "eye-off",
  "Bell": "notifications",
  "BellOff": "notifications-off",
  "Menu": "menu",
  "Filter": "filter",
  "Sort": "swap-vertical",
  "Grid": "grid",
  "List": "list",
  "Calendar": "calendar",
  "Clock": "time",
  "Location": "location",
  "Mail": "mail",
  "Phone": "call",
  "Globe": "globe",
  "Wifi": "wifi",
  "Bluetooth": "bluetooth",
  "Battery": "battery-full",
  "Volume": "volume-high",
  "VolumeOff": "volume-mute",
  "Play": "play",
  "Pause": "pause",
  "Stop": "stop",
  "Next": "play-forward",
  "Previous": "play-back",
  "Shuffle": "shuffle",
  "Repeat": "repeat",
  "Fullscreen": "expand",
  "Minimize": "contract",
  "Maximize": "resize",
  "Minus": "remove",
  "Plus": "add",
  "ChevronUp": "chevron-up",
  "ChevronDown": "chevron-down",
  "ChevronLeft": "chevron-back",
  "ChevronRight": "chevron-forward",
  "ChevronUp": "chevron-up",
  "ChevronDown": "chevron-down",
  "ChevronLeft": "chevron-back",
  "ChevronRight": "chevron-forward",
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
  
  // Get the mapped icon name or use the original name if not found
  const iconName = iconMap[name] || name;

  if (onClick) {
    return (
      <TouchableOpacity
        onPress={onClick}
        className={combinedClassName}
        activeOpacity={0.7}
      >
        <Ionicons name={iconName} size={finalSize} color={color} />
        {label && <Text className="ml-2 text-sm text-gray-700">{label}</Text>}
      </TouchableOpacity>
    );
  }

  return (
    <View className={combinedClassName}>
      <Ionicons name={iconName} size={finalSize} color={color} />
      {label && <Text className="ml-2 text-sm text-gray-700">{label}</Text>}
    </View>
  );
};

export default Icon;
