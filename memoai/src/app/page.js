export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        MemoAI
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Capture and preserve your grandparents’ life stories through warm AI-powered conversations. Turn memories into timeless blog posts for your family to cherish forever.
      </p>
      <div className="flex gap-4">
        <a
          href="/chat"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Start Chat
        </a>
        <a
          href="/memories"
          className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          View Memories
        </a>
      </div>
      <footer className="mt-16 text-gray-500 text-sm">
        Built with ❤️ for ACTA Global Hackathon 2025
      </footer>
    </main>
  );
}
