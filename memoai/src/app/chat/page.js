"use client";
import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hello! I'm MemoAI. Let's start capturing your memories." }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { sender: "user", text: input }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "✨ That's wonderful! Can you tell me more about that memory?" }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
      background: "linear-gradient(to bottom right, #ffe4e6, #fcd5ce, #fff1e0)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#c026d3", marginBottom: "20px" }}>
        MemoAI Chat
      </h1>

      <div style={{
        width: "100%",
        maxWidth: "600px",
        background: "#fff",
        borderRadius: "30px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflowY: "auto",
        height: "60vh",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
      }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              background: msg.sender === "user" ? "#fbcfe8" : "#fce7f3",
              color: msg.sender === "user" ? "#9d174d" : "#831843",
              padding: "10px 15px",
              borderRadius: "20px",
              maxWidth: "75%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              wordBreak: "break-word"
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div style={{
        display: "flex",
        gap: "10px",
        marginTop: "15px",
        width: "100%",
        maxWidth: "600px"
      }}>
        <input
          style={{
            flex: 1,
            padding: "10px 15px",
            borderRadius: "20px",
            border: "1px solid #fbcfe8",
            outline: "none"
          }}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a memory..."
        />
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            background: "#db2777",
            color: "white",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer"
          }}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>

      <footer style={{ marginTop: "20px", color: "#6b7280", fontSize: "0.9rem" }}>
        Built with ❤️ for ACTA Global Hackathon 2025
      </footer>
    </main>
  );
}
