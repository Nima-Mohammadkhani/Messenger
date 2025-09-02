import { ImageSourcePropType, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type IconName = keyof typeof Ionicons.glyphMap;

export interface ButtonProps {
  title?: string;
  onPress?: () => void;
  variant?: string;
  size?: string;
  className?: string;
  textClassName?: string;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  iconSize?: number;
  rippleColor?: string;
}

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  secureToggle?: boolean;
  containerClassName?: string;
  inputClassName?: string;
}
