import React from "react";
import { ChevronLeft } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white z-50">
      {/* 左側の戻るボタン */}
      <button className="flex items-center text-black">
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* 中央のタイトル */}
      <h1 className="text-lg font-bold text-center flex-1">12月16日</h1>
    </header>
  );
};

export default Header;
