import { MessageCircle } from "lucide-react";

const FloatingContact = () => {
  return (
    <a
      href="https://line.me/ti/p/@zhixin"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#06C755] hover:bg-[#05b34d] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="透過LINE聯絡我們"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default FloatingContact;
