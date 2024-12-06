import React from "react";

const Footer: React.FC = () => {
  // サンプルデータ
  const currentTotal = 10000; // 現在の合計金額（例: ¥10,000）
  const jobEarnings = 5000; // アルバイトで得られる金額（例: ¥5,000）

  return (
    <footer className="fixed bottom-0 left-0 w-full flex gap-3 items-center justify-between px-4 py-4 border-t  border-gray-200 bg-white  z-50">
      <button className="flex-1 bg-gray-800 text-white py-3 rounded-md font-semibold">
        Pay
      </button>
      <button className="flex-1 bg-red-500 text-white py-3 rounded-md font-semibold">
        購入する
      </button>
    </footer>
  );
};

export default Footer;
