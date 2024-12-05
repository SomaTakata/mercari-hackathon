import { Heart, MessageSquare, DollarSign, Copy } from "lucide-react";
import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="h-full bg-white pb-48">
      {/* 商品画像 */}
      <div className="text-center">
        <img src="/saihu.png" alt="商品画像" className="w-full" />
      </div>

      {/* 商品情報 */}
      <div className="mt-4 p-4">
        <h2 className="text-lg font-semibold">
          ✨美品✨ PRADA 三角プレート 二つ折り財布
        </h2>
        <p className="text-slate-800 text-4xl font-medium mt-2">¥8,480</p>
      </div>

      {/* サブ情報 */}
      <div className="flex flex-col gap-2 px-4">
        <div className="text-gray-700 text-md">
          メルカリの分割払いなら
          <span className="font-bold">月々 ¥2,897 ~ × 3</span>
        </div>
        <div className="text-gray-700 bg-blue-100 w-fit px-2 py-0.5">
          メルペイ残高は <span className="font-bold">¥5,081</span> をお持ちです
        </div>

        {/* ボタン群 */}
        <div className="flex gap-3 mt-3 w-full overflow-x-scroll">
          {/* いいねボタン */}
          <div className="border flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap">
            <Heart className="h-6 w-6" />
            <span className="text-sm">5</span>
          </div>

          {/* コメントボタン */}
          <div className="border flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap">
            <MessageSquare className="h-6 w-6" />
            <span className="text-sm">コメント</span>
          </div>

          {/* 希望価格ボタン */}
          <div className="border flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap">
            <DollarSign className="h-6 w-6" />
            <span className="text-sm">希望価格</span>
          </div>

          {/* コピー出品ボタン */}
          <div className="border flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap">
            <Copy className="h-6 w-6" />
            <span className="text-sm">コピー出品</span>
          </div>

          {/* シェアボタン */}
          <div className="border flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap">
            <Copy className="h-6 w-6" />
            <span className="text-sm">シェア</span>
          </div>

          {/* 保存ボタン */}
          <div className="border flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap">
            <Heart className="h-6 w-6" />
            <span className="text-sm">保存</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
