"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
      background: "linear-gradient(to bottom right, #fef3c7, #fee2e2, #fce7f3)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#c026d3",
        marginBottom: "20px"
      }}>
        Welcome to MemoAI
      </h1>

      <p style={{
        fontSize: "1.2rem",
        color: "#6b7280",
        maxWidth: "600px",
        marginBottom: "40px"
      }}>
        Capture and preserve your precious memories. Chat with MemoAI or view stored memories anytime.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => router.push("/chat")}
          style={{
            padding: "15px 30px",
            borderRadius: "25px",
            background: "#db2777",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.2s"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Start Chat
        </button>

        <button
          onClick={() => router.push("/memories")}
          style={{
            padding: "15px 30px",
            borderRadius: "25px",
            background: "#fbbf24",
            color: "#831843",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.2s"
          }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        >
          View Memories
        </button>
      </div>

      <footer style={{
        marginTop: "50px",
        color: "#6b7280",
        fontSize: "0.9rem"
      }}>
        Built with ❤️ for ACTA Global Hackathon 2025
      </footer>
    </main>
  );
}
