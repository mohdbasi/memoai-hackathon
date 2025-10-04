"use client";
import { useState } from "react";

export default function Memories() {
  // Mock memories data
  const [memories] = useState([
    { title: "Grandpa's Childhood", content: "He grew up in a small village surrounded by mountains..." },
    { title: "Grandma's First Job", content: "She worked as a school teacher and loved her students..." },
    { title: "Family Trip", content: "They took a trip to the beach and shared stories under the sunset..." },
  ]);

  return (
    <main style={{
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #fff1e0, #ffe4e6)",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#c026d3", marginBottom: "20px" }}>
        Memories
      </h1>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        {memories.map((memory, idx) => (
          <div key={idx} style={{
            width: "100%",
            maxWidth: "600px",
            background: "#fff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#831843", marginBottom: "10px" }}>{memory.title}</h2>
            <p style={{ fontSize: "1rem", color: "#6b7280" }}>{memory.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
