"use client";
import React, { useState } from "react";

const DateSelector: React.FC = () => {
  // 選択された日付を管理するステート
  const [selectedDate, setSelectedDate] = useState("今日");

  // 日付データの例
  const dates = [
    { day: "今日", date: "金" },
    { day: "12/7", date: "土" },
    { day: "12/8", date: "日" },
    { day: "12/9", date: "月" },
    { day: "12/10", date: "火" },
    { day: "12/11", date: "水" },
  ];

  return (
    <div className="flex gap-2 p-4 overflow-x-auto bg-white">
      {dates.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedDate(item.day)}
          className={`px-4 py-2 rounded-md border text-center ${
            selectedDate === item.day
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          <div className={`font-bold whitespace-nowrap `}>{item.day}</div>
          <div
            className={`font-bold ${
              item.day === "12/8"
                ? "text-red-500"
                : item.day === "12/7"
                ? "text-blue-500"
                : ""
            }`}
          >
            {item.date}
          </div>
        </button>
      ))}
    </div>
  );
};

export default DateSelector;
