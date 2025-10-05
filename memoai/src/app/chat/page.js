"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hello! I'm MemoAI. Let's start capturing your memories." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = {
      sender: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post("/api/chat", {
        model: "gpt2",
        messages: [
          { role: "system", content: "You are MemoAI, a friendly memory assistant." },
          ...messages.map(m => ({
            role: m.sender === "ai" ? "assistant" : "user",
            content: m.text
          })),
          { role: "user", content: input }
        ],
        temperature: 0.7
      }, {
        headers: { "Content-Type": "application/json" }
      });

      const aiMessage = {
        sender: "ai",
        text: response.data.choices[0].message.content,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "⚠️ Sorry, I couldn't fetch a response.", timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => { if (e.key === "Enter") sendMessage(); };
  const clearChat = () => setMessages([{ sender: "ai", text: "👋 Hello! I'm MemoAI. Let's start capturing your memories.", timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);

  return (
    <main style={{ display:"flex", flexDirection:"column", alignItems:"center", minHeight:"100vh", padding:"20px", background:"#fff7f0", fontFamily:"Arial, sans-serif" }}>
      <h1 style={{ fontSize:"2.5rem", fontWeight:"bold", color:"#c026d3", marginBottom:"20px" }}>MemoAI Chat</h1>
      <div style={{ width:"100%", maxWidth:"600px", background:"#fff", borderRadius:"20px", padding:"20px", display:"flex", flexDirection:"column", gap:"10px", overflowY:"auto", height:"60vh", boxShadow:"0 5px 15px rgba(0,0,0,0.1)" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ alignSelf: msg.sender==="user"?"flex-end":"flex-start", background: msg.sender==="user"?"#fbcfe8":"#fce7f3", color: msg.sender==="user"?"#9d174d":"#831843", padding:"10px 15px", borderRadius:"20px", maxWidth:"75%", wordBreak:"break-word" }}>
            {msg.text}
            {msg.timestamp && <div style={{ fontSize:"0.7rem", color:"#9ca3af", textAlign: msg.sender==="user"?"right":"left", marginTop:"2px" }}>{msg.timestamp}</div>}
          </div>
        ))}
        {isTyping && <div style={{ alignSelf:"flex-start", fontStyle:"italic", color:"#6b7280" }}>MemoAI is typing...</div>}
        <div ref={chatEndRef}></div>
      </div>
      <div style={{ display:"flex", gap:"10px", marginTop:"15px", width:"100%", maxWidth:"600px" }}>
        <input style={{ flex:1, padding:"10px 15px", borderRadius:"20px", border:"1px solid #fbcfe8", outline:"none" }} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a memory..." />
        <button style={{ padding:"10px 20px", borderRadius:"20px", background:"#db2777", color:"white", fontWeight:"bold", border:"none", cursor:"pointer" }} onClick={sendMessage}>Send</button>
        <button style={{ padding:"10px 20px", borderRadius:"20px", background:"#fbbf24", color:"#831843", fontWeight:"bold", border:"none", cursor:"pointer" }} onClick={clearChat}>Clear</button>
      </div>
    </main>
  );
}
