"use client"
import animationData from "@/public/animation_lk0vjpq1.json";
import Lottie from "lottie-react";
// import {Eczar} from "next/dist/compiled/@next/font/dist/google";
import {Rubik} from "next/font/google";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const font=Rubik({weight: "400", subsets: ['latin']})

export default function Home() {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/portfolio")
        },3000);
    },[])
  return (
    <main className="grid place-items-center min-h-screen w-full">
        <div className={"mx-auto flex flex-col justify-evenly h-full w-1/2"}>
            <div className={"font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mx-auto "+font.className}>{ "<Mukul Phougat/>" }</div>
            <Lottie animationData={animationData} className={"mx-auto w-1/2 rounded-full h-1/2 hover:animate-spin"} />
        </div>
    </main>
  )
}
