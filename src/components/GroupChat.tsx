import { useState } from "react";
import { Send, AlertTriangle, Battery, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  type: "user" | "system" | "alert";
  sender?: string;
  content: string;
  timestamp: string;
  alertType?: "location" | "battery" | "warning";
}

const GroupChat = () => {
  const [newMessage, setNewMessage] = useState("");
  
  const messages: Message[] = [
    { 
      id: 1, 
      type: "user", 
      sender: "Mike", 
      content: "Yo where's everyone at?", 
      timestamp: "11:23 PM" 
    },
    { 
      id: 2, 
      type: "system", 
      content: "Sarah has left the group area", 
      timestamp: "11:25 PM",
      alertType: "location"
    },
    { 
      id: 3, 
      type: "user", 
      sender: "Sarah", 
      content: "Just grabbing some food across the street, chill 😂", 
      timestamp: "11:26 PM" 
    },
    { 
      id: 4, 
      type: "alert", 
      content: "Jake's phone is at 12% battery!", 
      timestamp: "11:28 PM",
      alertType: "battery"
    },
    { 
      id: 5, 
      type: "user", 
      sender: "You", 
      content: "Let's meet at the bar entrance in 10", 
      timestamp: "11:30 PM" 
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-3 p-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-border/30">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-muted border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
          />
          <Button size="icon" variant="glow">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const MessageBubble = ({ message }: { message: Message }) => {
  if (message.type === "system" || message.type === "alert") {
    return (
      <div className={`
        flex items-center gap-2 px-3 py-2 rounded-lg text-sm animate-slide-up
        ${message.alertType === "battery" ? "bg-warning/10 text-warning border border-warning/30" : ""}
        ${message.alertType === "location" ? "bg-secondary/10 text-secondary border border-secondary/30" : ""}
        ${message.alertType === "warning" ? "bg-destructive/10 text-destructive border border-destructive/30" : ""}
      `}>
        {message.alertType === "battery" && <Battery className="h-4 w-4" />}
        {message.alertType === "location" && <MapPin className="h-4 w-4" />}
        {message.alertType === "warning" && <AlertTriangle className="h-4 w-4" />}
        <span>{message.content}</span>
        <span className="ml-auto text-xs opacity-60">{message.timestamp}</span>
      </div>
    );
  }

  const isMe = message.sender === "You";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} animate-slide-up`}>
      <div className={`
        max-w-[80%] rounded-2xl px-4 py-2
        ${isMe 
          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-sm" 
          : "glass rounded-bl-sm"
        }
      `}>
        {!isMe && (
          <span className="text-xs font-medium text-primary block mb-1">
            {message.sender}
          </span>
        )}
        <p className="text-sm">{message.content}</p>
        <span className={`text-xs block mt-1 ${isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {message.timestamp}
        </span>
      </div>
    </div>
  );
};

export default GroupChat;
