export default function PersonalityTest() {
  return (
    <div className="h-full justify-center bg-white flex flex-col items-center px-5 py-12  gap-20">
      <div className="relative animate-ping h-14 w-14 bg-blue-600 rounded-full"></div>
      <div className="text-slate-700 text-center flex flex-col gap-2 mb-12">
        <p className="text-3xl font-bold">当てはまるものを</p>
        <p className="text-3xl font-bold">教えてください</p>
      </div>
    </div>
  );
}
