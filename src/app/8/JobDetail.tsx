import React from "react";
import { ChevronLeft, Heart } from "lucide-react";

const JobDetail: React.FC = () => {
  return (
    <div className="bg-gray-100 pb-20">
      {/* ヘッダー */}
      <header className="flex items-center px-4 py-3 border-b border-gray-200 bg-white">
        <button className="text-black">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">12月6日 (金)</h1>
      </header>

      {/* メイン画像 */}
      <div className="relative">
        <img src="/8.png" alt="Job Main" className="w-full h-64 object-cover" />
        <div className="absolute bottom-2 left-2 flex gap-4">
          <div className="bg-blue-400 text-white px-2 py-1 rounded text-xs">
            募集人数 7/10人
          </div>
          <div className=" bg-white text-black px-2 py-1 rounded text-xs">
            未経験者歓迎
          </div>
        </div>
        <div className="absolute bottom-2 right-3 bg-slate-200 rounded-lg px-2 py-1 flex items-center text-gray-500">
          <Heart className="h-4 w-4" />
          <span className="ml-1">5</span>
        </div>
      </div>

      {/* タイトルと詳細 */}
      <div className="p-4 pt-6 bg-white">
        <h2 className="text-lg font-bold">
          今なら給与500円UP中！！9/1より他社スキマバイト経験者も勤務OKになりました✨
          車通勤OK//荷物の仕分け📗ヤマト運輸 埼玉ベース
        </h2>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-600 text-sm">
            物流・倉庫（港湾運送業務を除く） / 物流・倉庫（港湾運送業務を除く）
          </p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            <span className="font-bold">📅 12/6 (金) 17:00 - 22:00</span> 5時間
          </p>
          <p className="text-sm text-gray-700 mt-2">📍 埼玉県上尾市</p>
        </div>
        <div className="flex justify-end w-full  mt-2">
          <p className="text-slate-800 text-4xl font-bold ">￥3000</p>
        </div>
        <div className="bg-white p-4">
          <div className="w-full border mb-6 mt-3" />

          {/* 仕事内容 */}
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-2">仕事内容</h2>
            <p className="text-gray-700">
              今ならなんと！＼給与500円UP中！！／✨✨
              <br />
              それに加えて・・・
            </p>
            <p className="text-gray-700 font-bold mt-4">
              【最大12,000ポイントもらえるCPN実施中！※条件あり】
            </p>
            <p className="text-gray-700">
              期間限定！最大12,000Pのメルカリポイント{" "}
            </p>
          </section>

          {/* 待遇 */}
          <section>
            <h2 className="text-lg font-bold mb-2">待遇</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>未経験者歓迎</li>
              <li>駐車場あり</li>
              <li>駐輪場あり</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
