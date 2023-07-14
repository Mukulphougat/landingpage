"use client"
import {Roboto} from "next/font/google";
import Link from "next/link";
import {useState} from "react";

type Props={
    id: number
    title: string
    url: string
    short: string
    description: string
}
const latoFont=Roboto({subsets: ['latin'], weight: "500"})
export default function ProjectTile(props:Props){
    const [toggled,change]=useState(false);
    const newArray=props.description.split(" ");
    const shortArr = props.short.split(" ");
    const index:number=newArray.indexOf(shortArr[shortArr.length-1]);
    const generateRemaining=():string=>{
        let res=""
        for ( let i:number=index+1 ; i < newArray.length ; i++ ) {
            if ( i < newArray.length-1 ) res+=newArray[i]+" ";
            else res+=newArray[i];
        }
        return res;
    }
    return (
        <div className={"w-full h-36 flex flex-col "+latoFont.className} key={props.id}>
            <div className={"text-xl font-bold text-black"}><span className={"text-black"}>{props.id}. </span>{props.title}</div>
            <a className={"text-blue-500"} target={"_blank"} href={props.url}>Link</a>
            <p className={"text-sm text-justify w-full font-mono font-light text-green-400 h-10"}>
                {props.short}
                {/*{newArray.slice(0,10).toString()}*/}
                {/*{*/}
                {/*    toggled && generateRemaining()*/}
                {/*}*/}
                {
                    toggled ?
                        <>
                            {generateRemaining()}
                            <button className={"text-blue-500 w-28 text-sm"} onClick={()=>change((prev)=>!prev)}>..read less</button>
                        </>
                        :
                        ""
                }
                {/*<Link href={`/more/${props.title}/${props.description}/${props.url}`} className={"text-blue-500 w-20 text-sm"}>...read more</Link>*/}
                {
                    !toggled && <button className={"text-blue-500 w-28 text-sm"} onClick={()=>change((prev)=>!prev)}>..read more</button>
                }
                </p>
        </div>
    )
}