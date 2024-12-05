import Footer from "./Fotter";
import Header from "./Header";
import JobDetail from "./JobDetail";

const JobListing: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 上部固定のヘッダー */}
      <Header />

      <JobDetail />

      {/* 下部固定のフッター */}
      <Footer />
    </div>
  );
};

export default JobListing;
