"use client";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm MemoAI. Let's start capturing your memories. 😊" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { sender: "user", text: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "That's wonderful! Can you tell me more about that?" }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">MemoAI Chat</h1>
      <div className="w-full max-w-xl bg-white shadow rounded p-4 flex flex-col gap-2 overflow-y-auto h-[60vh]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex w-full max-w-xl gap-2">
        <input
          className="flex-1 border border-gray-300 rounded p-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a memory..."
        />
        <button
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </main>
  );
}
