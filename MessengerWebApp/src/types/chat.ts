export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: string;
  isRead: boolean;
}
