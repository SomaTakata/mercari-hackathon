import { X } from "lucide-react";

export default function PersonalityQuiz() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-slate-100">
      {/* Main content */}
      <div className="px-6 pt-32 pb-8 space-y-24">
        <div>
          <div className="text-center text-white space-y-4">
            <p className="text-lg">あなたにおすすめの求人をご案内</p>
            <h1 className="text-4xl font-bold">ハロ活タイプ診断</h1>
          </div>

          {/* Avatars */}
          <div className="relative h-[400px] mt-16 ">
            {/* Top avatar - Woman in red */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-red-400 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4v2h.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-7A2.5 2.5 0 0 1 7.5 10H8V8a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v2h4V8a2 2 0 0 0-2-2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Top right avatar - Man in blue */}
            <div className="absolute top-[20%] right-[10%]">
              <div className="w-20 h-20 rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4v2h.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-7A2.5 2.5 0 0 1 7.5 10H8V8a4 4 0 0 1 4-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right avatar - Medical green */}
            <div className="absolute bottom-[30%] right-[10%]">
              <div className="w-20 h-20 rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4v2h.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-7A2.5 2.5 0 0 1 7.5 10H8V8a4 4 0 0 1 4-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom avatar - Elder with glasses */}
            <div className="absolute bottom-10 left-1/2  -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-amber-700 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4v2h.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-7A2.5 2.5 0 0 1 7.5 10H8V8a4 4 0 0 1 4-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom left avatar - Woman in black */}
            <div className="absolute bottom-[30%] left-[10%]">
              <div className="w-20 h-20 rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4v2h.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-7A2.5 2.5 0 0 1 7.5 10H8V8a4 4 0 0 1 4-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Top left avatar - Person with cap */}
            <div className="absolute top-[20%] left-[10%]">
              <div className="w-20 h-20 rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-gray-400 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-white">
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4v2h.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-7A2.5 2.5 0 0 1 7.5 10H8V8a4 4 0 0 1 4-4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <button className="w-full font-bold bg-red-500 text-white py-4 rounded-lg text-xl  ">
          診断する
        </button>
      </div>
    </div>
  );
}
