import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const messages = body.messages || [];
  const userMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

  let reply = "";

  // 🎯 Keyword-based Smart Responses
  if (userMessage.includes("happy") || userMessage.includes("great") || userMessage.includes("awesome")) {
    reply = "😄 I love hearing that! You sound really positive — want me to note this as a happy memory?";
  } 
  else if (userMessage.includes("sad") || userMessage.includes("bad") || userMessage.includes("upset")) {
    reply = "😔 I'm sorry to hear that. Even tough days deserve to be remembered — they shape who we are.";
  } 
  else if (userMessage.includes("goal") || userMessage.includes("plan") || userMessage.includes("dream")) {
    reply = "🚀 That sounds inspiring! Setting goals keeps your memories aligned with your purpose.";
  } 
  else if (userMessage.includes("friend") || userMessage.includes("love") || userMessage.includes("family")) {
    reply = "❤️ Relationships make the best memories. Want to label this one as a ‘special people’ moment?";
  } 
  else if (userMessage.includes("college") || userMessage.includes("school") || userMessage.includes("class")) {
    reply = "🎓 Ah, those days! College life always brings unforgettable memories.";
  } 
  else if (userMessage.includes("trip") || userMessage.includes("travel") || userMessage.includes("vacation")) {
    reply = "🌍 Traveling always leaves beautiful memories behind. Where did you go?";
  } 
  else if (userMessage.includes("work") || userMessage.includes("project") || userMessage.includes("task")) {
    reply = "💼 Sounds productive! Do you want me to mark this as a ‘career memory’?";
  } 
  else if (userMessage.includes("ai") || userMessage.includes("memoai")) {
    reply = "🤖 Haha, that’s me! I’m here to help you keep your memories safe and meaningful.";
  } 
  else if (userMessage.includes("hello") || userMessage.includes("hi") || userMessage.includes("hey")) {
    reply = "👋 Hey there! How are you feeling today?";
  } 
  else {
    // ✨ Default fallback responses
    const generalReplies = [
      "That’s interesting! Tell me more about it.",
      "I love the way you describe things — feels so vivid!",
      "That sounds like a moment worth remembering.",
      "Would you like me to keep this as a personal note?",
      "Hmm, tell me how that made you feel.",
      "That seems special — memories like that matter a lot ❤️",
      "Wow, that’s beautiful. Let’s make sure we remember it!",
      "You always share such meaningful thoughts.",
      "Haha, that’s funny! Want me to tag it as a ‘fun memory’?",
    ];
    reply = generalReplies[Math.floor(Math.random() * generalReplies.length)];
  }

  // Simulate AI response
  return NextResponse.json({
    choices: [{ message: { content: reply } }],
  });
}
