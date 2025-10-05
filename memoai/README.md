# MemoAI — Your Personal Memory Chat Assistant

MemoAI is a smart, chat-based web app built with **Next.js** and **React** that helps you record, view, and interact with your memories. You can chat with the assistant (mocked for now, but easily replaceable with any AI API) and browse your stored "memories" with timestamps.

---

## 🚀 Features

* 💬 **Chat Interface** — Simple, intuitive chat with AI-like responses.
* 📜 **Memories Page** — View your stored conversations and memories with timestamps.
* 🎨 **Responsive UI** — Clean design using inline styles and Tailwind CSS.
* ⚙️ **Next.js 15 + React 19** — Built on the latest modern web stack.
* 🌐 **Easy Deployment** — Ready for hosting on [Vercel](https://vercel.com).

---

## 📁 Folder Structure

```
memoai-hackathon/
└── memoai/
    ├── app/
    │   ├── chat/
    │   │   └── page.js         # Chat page (with mock AI)
    │   ├── memories/
    │   │   └── page.js         # Memories page
    │   ├── globals.css         # Global styles
    │   └── page.js             # Main landing page
    ├── public/
    │   └── favicon.ico
    ├── package.json
    └── README.md
```

---

## 🧩 Tech Stack

| Category       | Technologies                   |
| -------------- | ------------------------------ |
| Frontend       | React 19, Next.js 15           |
| Styling        | Tailwind CSS + Inline CSS      |
| API (optional) | OpenAI API or any LLM endpoint |
| Deployment     | Vercel                         |

---

## ⚙️ Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/memoai.git
   cd memoai-hackathon/memoai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app locally**

   ```bash
   npm run dev
   ```

4. Visit **[http://localhost:3000](http://localhost:3000)** in your browser 🎉

---

## 🔑 Environment Variables (Optional, if using AI API)

Create a `.env.local` file inside the `memoai` folder:

```
OPENAI_API_KEY=your_api_key_here
```

---

## 🌈 Future Improvements

* ✅ Connect to real AI API (OpenAI, Gemini, or Claude)
* ✅ Store chat history permanently
* ✅ Add authentication for personalized memory storage
* ✅ Improve UI with animations and themes

---

## 💡 Author

**Mohamed Basim**
📍 Kerala, India
💻 Passionate about AI, engineering, and technology innovation
🌐 [GitHub: mohdbasi](https://github.com/mohdbasi)

---

## 🪄 License

This project is open-source under the **MIT License** — feel free to modify and use it!
