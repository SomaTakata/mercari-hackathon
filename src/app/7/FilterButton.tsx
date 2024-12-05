import React from "react";
import { Sliders } from "lucide-react"; // アイコンをインポート

const FilterButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-100">
      <Sliders className="h-4 w-4" />
      <span className="font-bold text-sm">絞り込み</span>
    </button>
  );
};

export default FilterButton;
