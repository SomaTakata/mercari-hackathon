import { ArrowBigRight, ArrowLeft, ChevronRight } from "lucide-react";
import React from "react";
import Header from "./Header";
import Footer from "./Fotter";

const PaymentDetails: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-[60px] pb-[55px]">
      <Header />
      {/* 商品情報 */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex">
          <img
            src="/saihu.png"
            alt="PRADA 二つ折り財布"
            className="w-16 h-16 object-cover rounded"
          />
          <div className="ml-4 flex flex-col gap-2">
            <h2 className="text-md font-medium">
              PRADA 二つ折り財布 黒 レザー
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-base text-slate-800 font-bold ">¥10,000</p>
              <p className="text-xs text-gray-600">送料込み</p>
            </div>
          </div>
        </div>
      </div>

      {/* 支払い詳細 */}
      <div className="bg-white">
        {/* あんしん鑑定 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="">
            <p className="text-gray-700 text-sm font-semibold">あんしん鑑定</p>
            <p className="text-xs text-gray-500">鑑定手数料: ¥4,300</p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm">利用しない</span>
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </div>
        </div>

        {/* クーポン */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <p className="text-gray-700 text-sm  font-semibold">クーポン</p>
          <div className="flex items-center">
            <p className="text-gray-500 text-sm">クーポンがあります</p>
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </div>
        </div>

        {/* ポイントの使用 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div>
              <p className="text-gray-700 text-sm  font-semibold">
                ポイントの使用
              </p>
              <div className="flex items-center">
                <img src="/mercari.png" alt="メルカリ" className="w-5 h-5" />
                <p className="text-gray-700 text-xs">P0</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 text-sm">P0</span>
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </div>
        </div>

        {/* メルペイ残高の使用 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <p className="text-gray-700  text-sm  font-semibold">
            メルペイ残高の使用
          </p>
          <div className="flex items-center">
            <span className="text-gray-700 text-sm">¥5,081</span>
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </div>
        </div>

        {/* ビットコインの使用 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <p className="text-gray-700  text-sm  font-semibold">
            ビットコインの使用
          </p>
          <button className="px-2 font-semibold py-1 border border-red-500 text-xs text-red-500 rounded">
            使用する
          </button>
        </div>

        {/* はたらくの使用 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex gap-1 items-center">
            <p className="text-xs font-bold text-white bg-red-600 px-2 py-0.5 rounded-md">
              new !
            </p>
            <p className="text-gray-700  text-sm  font-semibold">
              はたらくの使用
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 text-sm">¥5,081</span>
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </div>
        </div>

        {/* 支払い方法 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <p className="text-gray-700  text-sm  font-semibold">支払い方法</p>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img
                src="/viza.png"
                alt="Visa"
                className="w-8 h-8 object-cover"
              />
              <div className="text-gray-700 flex text-sm whitespace-nowrap">
                <span className="text-sm flex items-center">**********</span>
                4205
              </div>
            </div>
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </div>
        </div>

        {/* メルペイ残高の使用 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <p className="text-gray-700  text-sm  font-semibold">支払金額</p>
          <span className="text-gray-700 font-bold">¥5,081</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentDetails;
