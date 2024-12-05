import React from "react";
import DateSelector from "./DateSelector";
import JobCard from "./JobCard";
import FilterButton from "./FilterButton";
import Header from "./Header";
import Footer from "./Fotter";

const JobListing: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 上部固定のヘッダー */}
      <Header />

      {/* コンテンツ部分 */}
      <div className="pt-[55px] pb-[55px]">
        {" "}
        {/* HeaderとFooterの高さ分余白を確保 */}
        <div className="w-full flex justify-end px-4 pt-4">
          <FilterButton />
        </div>
        <DateSelector />
        <JobCard />
      </div>

      {/* 下部固定のフッター */}
      <Footer />
    </div>
  );
};

export default JobListing;
