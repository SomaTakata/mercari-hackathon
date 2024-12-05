"use client";
import React, { useState } from "react";

const JobCard: React.FC = () => {
  // 選択されたカードのインデックスを管理
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const jobs = [
    {
      image: "/8.png",
      tag: "未経験者歓迎",
      title: "今なら給与500円UP中！！スキマバイト経験者歓迎",
      time: "17:00 - 22:00",
      location: "2.0km 埼玉県上尾市",
      salary: "¥6,750",
      points: "+P800対象",
    },
    {
      image: "/6.png",
      tag: "未経験者歓迎",
      title:
        "オープニングスタッフ大募集／ペットフードやペットおやつが充実した環境です",
      time: "9:00 - 17:30",
      location: "3.6km 埼玉県さいたま市",
      salary: "¥9,000",
      points: null,
    },
    {
      image: "/7.png",
      tag: "未経験者歓迎",
      title:
        "オープニングスタッフ大募集／ペットフードやペットおやつが充実した環境です",
      time: "9:00 - 17:30",
      location: "3.6km 埼玉県さいたま市",
      salary: "¥9,000",
      points: null,
    },
    {
      image: "/saihu.png",
      tag: "未経験者歓迎",
      title: "宅配寿司 銀のさらスタッフ募集（長時間勤務も可能です！）",
      time: "10:00 - 14:00",
      location: "5.0km 埼玉県川越市",
      salary: "¥4,500",
      points: "+P500対象",
    },
  ];

  return (
    <div className="bg-gray-100  p-4">
      {/* 横二列のグリッド */}
      <div className="grid grid-cols-2 gap-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="relative bg-white shadow rounded overflow-hidden cursor-pointer"
            onClick={() =>
              setSelectedCard(selectedCard === index ? null : index)
            }
          >
            {/* オーバーレイ */}
            {selectedCard === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <p className="text-white text-lg font-bold">応募中</p>
              </div>
            )}

            {/* 画像 */}
            <div className="relative">
              <img
                src={job.image}
                alt="Job"
                className="w-full h-40 object-cover"
              />
              {/* タグ */}
              <p className="absolute bottom-2 left-2 bg-white text-black px-2 py-1 rounded text-xs">
                {job.tag}
              </p>
            </div>

            {/* 内容 */}
            <div className="p-4">
              {/* タイトル（2行トランケート） */}
              <h2
                className="text-base font-bold mt-2 line-clamp-2"
                title={job.title}
              >
                {job.title}
              </h2>

              {/* 時間・場所 */}
              <p className="text-gray-500 text-sm mt-1 truncate">
                🕒 {job.time} <br />
                📍 {job.location}
              </p>

              {/* 給与とポイント */}
              <div className="flex justify-between items-center mt-2">
                <p className="text-slate-800 text-lg font-bold">{job.salary}</p>
                {job.points && (
                  <p className="text-xs text-blue-500 bg-blue-100 px-2 py-0.5 rounded">
                    {job.points}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
