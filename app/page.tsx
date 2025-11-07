import Image from "next/image";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <div className=" min-h-screen bg-black font-sans ">
      <NavBar />
      <div className="bg-black w-full flex items-center justify-center h-[calc(100vh-70px)]">
        <div className="w-[70%] h-[750px] z-10 rounded-2xl   backdrop-blur-md inner-shadow-lg bg-black ">
          <div className="flex flex-col">
            <div className="h-[200px] w-[400px] rounded-2xl border border-white/15">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
