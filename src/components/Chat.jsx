import { IoChatbubbleEllipses } from "react-icons/io5";

function Chat() {
  return (
    <button className="fixed bottom-6 right-6 bg-rose-300 text-xl text-white px-4 py-2 rounded-full shadow-lg hover:bg-rose-400 transition flex items-center gap-2">
      <IoChatbubbleEllipses />
      <p>Let's Chat</p>
    </button>
  );
}

export default Chat;
