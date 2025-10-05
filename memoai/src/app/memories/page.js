"use client";
import { useState } from "react";

export default function Memories() {
  const [memories, setMemories] = useState([
    {
      id: 1,
      title: "College Fest",
      date: "2025-03-12",
      description: "Had an amazing time at the college fest — music, lights, and laughter all around 🎉"
    },
    {
      id: 2,
      title: "Family Trip",
      date: "2025-05-20",
      description: "Visited Wayanad with my family. The hills and waterfalls were breathtaking 🌄"
    },
    {
      id: 3,
      title: "Late-night Coding",
      date: "2025-07-15",
      description: "Pulled an all-nighter building my first AI project — learned so much 💻"
    }
  ]);

  const [newMemory, setNewMemory] = useState({
    title: "",
    description: "",
    date: ""
  });

  const addMemory = () => {
    if (!newMemory.title || !newMemory.description || !newMemory.date) return;
    const newEntry = {
      id: Date.now(),
      title: newMemory.title,
      description: newMemory.description,
      date: newMemory.date
    };
    setMemories([...memories, newEntry]);
    setNewMemory({ title: "", description: "", date: "" });
  };

  const deleteMemory = (id) => {
    setMemories(memories.filter((m) => m.id !== id));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fce7f3, #fbcfe8, #fff1e0)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#be185d",
          marginBottom: "25px"
        }}
      >
        💖 My Memories
      </h1>

      {/* Add Memory Form */}
      <div
        style={{
          background: "#fff",
          borderRadius: "25px",
          padding: "25px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "700px",
          marginBottom: "30px"
        }}
      >
        <h2 style={{ color: "#9d174d", marginBottom: "15px" }}>Add a New Memory</h2>

        <input
          type="text"
          placeholder="Memory Title"
          value={newMemory.title}
          onChange={(e) => setNewMemory({ ...newMemory, title: e.target.value })}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "1px solid #f9a8d4"
          }}
        />

        <textarea
          placeholder="Memory Description"
          value={newMemory.description}
          onChange={(e) => setNewMemory({ ...newMemory, description: e.target.value })}
          rows="3"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #f9a8d4",
            marginBottom: "10px"
          }}
        ></textarea>

        {/* Date Picker */}
        <input
          type="date"
          value={newMemory.date}
          onChange={(e) => setNewMemory({ ...newMemory, date: e.target.value })}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "1px solid #f9a8d4"
          }}
        />

        <button
          onClick={addMemory}
          style={{
            background: "#db2777",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          ➕ Add Memory
        </button>
      </div>

      {/* Memories List */}
      <div
        style={{
          display: "grid",
          gap: "20px",
          width: "100%",
          maxWidth: "700px"
        }}
      >
        {memories.map((memory) => (
          <div
            key={memory.id}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ color: "#db2777", marginBottom: "5px" }}>{memory.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "10px" }}>
              📅 {memory.date}
            </p>
            <p style={{ marginBottom: "10px", color: "#374151" }}>{memory.description}</p>
            <button
              onClick={() => deleteMemory(memory.id)}
              style={{
                background: "#f87171",
                color: "white",
                border: "none",
                padding: "6px 15px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>

      <footer
        style={{
          marginTop: "30px",
          color: "#6b7280",
          fontSize: "0.9rem"
        }}
      >
        Built with ❤️ for ACTA Global Hackathon 2025
      </footer>
    </main>
  );
}
