import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function PersonalityTest() {
  return (
    <div className="h-full justify-between flex flex-col items-center px-5 py-12 pt-56 gap-6">
      <div className="flex flex-col gap-6">
        <div className="text-slate-700 text-center flex flex-col gap-2 mb-12">
          <p className="text-lg">あなたにおすすめの求人をご案内</p>
          <h1 className="text-4xl font-bold">ハロ活タイプ診断</h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Top avatar */}
          <Avatar className="w-20 h-20 border-4 border-slate-500">
            <AvatarImage src="./1.png" alt="Avatar 1" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Avatar className="w-20 h-20 border-4 border-slate-500">
            <AvatarImage src="./2.png" alt="Avatar 1" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Avatar className="w-20 h-20 border-4 border-slate-500">
            <AvatarImage src="./3.png" alt="Avatar 1" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Avatar className="w-20 h-20 border-4 border-slate-500">
            <AvatarImage src="./4.png" alt="Avatar 1" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Avatar className="w-20 h-20 border-4 border-slate-500">
            <AvatarImage src="./5.png" alt="Avatar 1" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>

          <Avatar className="w-20 h-20 border-4 border-slate-500">
            <AvatarImage src="./6.png" alt="Avatar 1" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Button className="w-full  bg-blue-500 text-white rounded-lg py-6 text-xl font-semibold hover:bg-red-600 transition-colors">
        診断する
      </Button>
    </div>
  );
}
