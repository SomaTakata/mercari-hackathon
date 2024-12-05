import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Timer } from "lucide-react";
import Image from "next/image";

export default function PersonalityTest() {
  return (
    <div className="h-full bg-gradient-to-b from-blue-600 to-slate-200 flex flex-col items-center px-5  py-12 gap-8">
      <div className="w-full bg-white flex flex-col items-center gap-5 p-5 py-7 rounded-lg">
        <Avatar className="w-20 h-20 border-4  border-slate-500">
          <AvatarImage src="./2.png" alt="Avatar 1" />
          <AvatarFallback>A1</AvatarFallback>
        </Avatar>
        <p className="text-2xl font-bold text-center text-slate-700">
          体を動かしながら効率よく収入を得たいアクティブ派
        </p>
        <div className="flex flex-wrap justify-center mt-3 gap-3 ">
          <div className="py-2 px-4 text-sm border-2 rounded-lg">
            #運動過不足解消
          </div>
          <div className="py-2 px-4 text-sm border-2 rounded-lg">
            #50代に人気
          </div>
          <div className="py-2 px-4 text-sm border-2 rounded-lg">
            #リピート率高め
          </div>
          <div className="py-2 px-4 text-sm border-2 rounded-lg">
            #時給1200以上
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <p className="font-semibold text-xl text-center text-white">
          \ あなたにおすすめの求人 5選 /
        </p>
        <div className="w-full">
          <div className="bg-white rounded-t-lg p-3 w-full">
            <div className="flex gap-3">
              <div className="aspect-video">
                <Image
                  alt="option"
                  src="/8.png"
                  width={1600}
                  height={900}
                  className="w-full h-24 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-1">
                <p className="text-sm font-semibold">
                  接客バイト！未経験者でも可能！ 週2日〜OK！
                </p>
                <div className="flex items-center gap-1">
                  <Timer className="w-4 h-4 " />
                  <p className="text-xs font-semibold text-slate-500">
                    07:30 - 10:00
                  </p>
                </div>
                <div className="flex w-full justify-end">
                  <p className="text-2xl font-bold text-blue-400">￥3800</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 flex items-center justify-center p-2 gap-3 rounded-b-lg">
            <p className="text-white font-bold text-base">マッチ度</p>
            <p className="text-white font-bold text-xl">96%</p>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-t-lg p-3 w-full">
            <div className="flex gap-3">
              <div className="aspect-video">
                <Image
                  alt="option"
                  src="/8.png"
                  width={1600}
                  height={900}
                  className="w-full h-24 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-1">
                <p className="text-sm font-semibold">
                  接客バイト！未経験者でも可能！ 週2日〜OK！
                </p>
                <div className="flex items-center gap-1">
                  <Timer className="w-4 h-4 " />
                  <p className="text-xs font-semibold text-slate-500">
                    07:30 - 10:00
                  </p>
                </div>
                <div className="flex w-full justify-end">
                  <p className="text-2xl font-bold text-blue-400">￥3800</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 flex items-center justify-center p-2 gap-3 rounded-b-lg">
            <p className="text-white font-bold text-base">マッチ度</p>
            <p className="text-white font-bold text-xl">96%</p>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-t-lg p-3 w-full">
            <div className="flex gap-3">
              <div className="aspect-video">
                <Image
                  alt="option"
                  src="/8.png"
                  width={1600}
                  height={900}
                  className="w-full h-24 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-1">
                <p className="text-sm font-semibold">
                  接客バイト！未経験者でも可能！ 週2日〜OK！
                </p>
                <div className="flex items-center gap-1">
                  <Timer className="w-4 h-4 " />
                  <p className="text-xs font-semibold text-slate-500">
                    07:30 - 10:00
                  </p>
                </div>
                <div className="flex w-full justify-end">
                  <p className="text-2xl font-bold text-blue-400">￥3800</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 flex items-center justify-center p-2 gap-3 rounded-b-lg">
            <p className="text-white font-bold text-base">マッチ度</p>
            <p className="text-white font-bold text-xl">96%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
