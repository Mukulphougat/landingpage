"use client"
import {Titillium_Web} from "next/font/google";
import {useRouter} from "next/navigation";

const nameHeading=Titillium_Web({subsets: ['latin-ext'],weight: "900"})

export default function Contact(){
    const router=useRouter()
    return (
        <div className={"w-full min-h-screen grid place-items-center"}>
            <div className={"absolute flex flex-row justify-start top-0 h-12 w-full"}>
                <button onClick={()=>router.back()} className={"text-gray-500 mx-4 w-20 my-2 rounded-lg hover:shadow-gray-500 hover:shadow-sm font-bold border-2 border-gray-400"}>BACK</button>
            </div>
            <div className={"w-1/3 h-1/2 flex flex-col "+nameHeading.className}>
                <a href={"https://twitter.com/mukulphoughat"} target={"_blank"} className={"flex my-2 border-2 rounded-lg border-gray-400 hover:shadow-gray-400 shadow-lg flex-row justify-evenly w-full"}>
                    <div className={"my-2"}>
                        <img width="52" height="52" src="https://img.icons8.com/color/96/twitter--v1.png" alt="twitter--v1"/>
                    </div>
                    <h1 className={"my-4 text-4xl "}>Twitter</h1>
                </a>
                <a href={"https://github.com/Mukulphougat"} target={"_blank"}className={"flex my-2 border-2 rounded-lg border-gray-400 hover:shadow-gray-400 shadow-lg flex-row justify-evenly w-full"}>
                    <div className={"my-2"} >
                        <img width="52" height="52" src="https://img.icons8.com/sf-black-filled/64/github.png" alt="github"/>
                    </div>
                    <h1 className={"my-4 text-4xl "}>GitHub</h1>
                </a>
                <a href={"https://www.linkedin.com/in/mukul-phougat-602657193/"} target={"_blank"} className={"flex my-2 border-2 rounded-lg border-gray-400 hover:shadow-gray-400 shadow-lg flex-row justify-evenly w-full"}>
                    <div className={"my-2"}>
                        <img className={"mx-6"} width="52" height="52" src="https://img.icons8.com/ios-glyphs/60/B404D5/linkedin.png" alt="linkedin"/>
                    </div>
                    <h1 className={"my-4 text-4xl "}>LinkedIn</h1>
                </a>
            </div>
        </div>
    )
}