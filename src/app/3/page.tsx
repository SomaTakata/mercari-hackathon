import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PersonalityTest() {
  return (
    <div className="h-full justify-center bg-white flex flex-col items-center px-5  py-12 gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="text-slate-700 text-center flex flex-col">
          <p className="text-[26px] font-bold">今の気分に近いのは何ですか？</p>
        </div>
        <div className="flex gap-3 ">
          <div className="w-12 h-3 bg-blue-400 rounded-lg"></div>
          <div className="w-11 h-3 bg-blue-200 rounded-lg"></div>
          <div className="w-11 h-3 bg-blue-200 rounded-lg"></div>
          <div className="w-11 h-3 bg-blue-200 rounded-lg"></div>
          <div className="w-11 h-3 bg-blue-200 rounded-lg"></div>
          <div className="w-11 h-3 bg-blue-200 rounded-lg"></div>
        </div>
      </div>
      <div className="mt-10 w-full flex flex-col gap-6">
        <div className="border-2 w-full rounded-md shadow-md">
          <Image
            alt="option"
            src="/8.png"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <p className="text-lg py-3 font-semibold text-slate-700 text-center">
            人と働きたい
          </p>
        </div>
        <div className="border-2 w-full rounded-md shadow-md">
          <Image
            alt="option"
            src="/7.png"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <p className="text-lg py-3 font-semibold text-slate-700 text-center">
            モクモク作業をしたい
          </p>
        </div>
      </div>
    </div>
  );
}
