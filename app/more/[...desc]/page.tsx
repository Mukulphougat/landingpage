"use client"
import {useRouter} from "next/navigation";
import {Lato, Montserrat} from "next/font/google";
import Link from "next/link";
const latoFont=Montserrat({subsets: ['latin'], weight: "500"})
export default function More({params}: {params: {desc: string[]}}){
    const myParams:string[]=params.desc;
    const router=useRouter();
    // const desc=params.desc[1];
    // const query = router;
    console.log(myParams[2])
    return (
        <div className={"w-full h-full p-12 "+latoFont.className}>
            <div className={"border p-10 w-2/5 border-gray-300 rounded rounded-lg"}>
                <button className={"text-gray-500 text-2xl hover:text-gray-300"} onClick={()=>router.back()}>Back</button>
                <div>
                    {/*<a href={myParams[2]} className={"text-blue-500"} target={"_blank"}>Link</a>*/}
                </div>
                <div className={"w-full h-36 flex flex-col "+latoFont.className}>
                    <div className={"text-2xl font-bold text-black"}>{myParams[0].replaceAll("%20"," ")}</div>
                    <p className={"text-justify text-xl font-light text-blue-500 h-10 wrap"}>
                        {myParams[1].replaceAll("%20"," ")}
                    </p>
                </div>
            </div>
        </div>
    );
}