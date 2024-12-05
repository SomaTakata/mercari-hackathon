import React from "react";

const Footer: React.FC = () => {
  // サンプルデータ
  const currentTotal = 10000; // 現在の合計金額（例: ¥10,000）
  const jobEarnings = 5000; // アルバイトで得られる金額（例: ¥5,000）

  return (
    <footer className="fixed bottom-0 left-0 w-full flex flex-col gap-3 items-center justify-between px-4 py-4 border-t  border-gray-200 bg-white  z-50">
      {/* 現在の合計金額 */}
      <div className="flex gap-4">
        <div className="text-sm font-bold text-gray-700">
          現在の差額:
          <span className="text-blue-600 text-xl pl-2">
            ¥{currentTotal.toLocaleString()}
          </span>
        </div>

        {/* アルバイトの収益 */}
        <div className="text-sm font-bold text-gray-700">
          アルバイト収益:
          <span className="text-green-600 text-xl pl-2">
            ¥{jobEarnings.toLocaleString()}
          </span>
        </div>
      </div>
      <button className="flex-1 bg-red-500 w-full text-white py-3 rounded-md font-semibold">
        設定する
      </button>
    </footer>
  );
};

export default Footer;
