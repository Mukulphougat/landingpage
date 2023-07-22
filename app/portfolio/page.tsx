"use client"
import animationData from "@/public/animation_lk0uwt2i.json";
import Lottie from "lottie-react";
import {Titillium_Web, Roboto} from "next/font/google";
import {ProjectDetails} from "@/data/ProjectsInfo";
import ProjectTile from "@/component/ProjectTile";
import Link from "next/link";
const latoFont=Roboto({subsets: ['latin'], weight: "500"})
const nameHeading=Titillium_Web({subsets: ['latin-ext'],weight: "900"})
export default function Home() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between">
            <div className={"absolute flex flex-row justify-end top-0 h-12 w-full"}>
                <div className={"my-2 mx-4"}>
                    <Link href={"/contact"} className={"text-xl text-blue-500 "+latoFont.className}>CONTACT</Link>
                </div>
            </div>
            <div className={"p-8 w-full flex flex-col"}>
                <div className={"my-8 flex flex-col rounded-sm w-full h-64 bg-transparent"}>
                    <img src={"./img_1.png"} className={"mx-auto w-60 h-60 rounded-full"} width={50} height={50} alt={"PROFILE"}/>
                    <div className={"flex flex-row my-4 justify-center"}>
                        <h1 className={"text-4xl text-black "+nameHeading.className}>{"<Mukul Phougat/>"}</h1>
                    </div>
                </div>
                <div className={"w-full h-40 flex flex-row justify-end"}>
                    <Lottie animationData={animationData} className={"w-96 h-40"}/>
                </div>
                <div className={"my-6 border-2 border-gray-100 shadow-lg shadow-gray-100 rounded-lg w-full h-44 p-8"}>
                    <div>
                        <h1 className={"text-3xl text-black "+latoFont.className}>Technical Skills</h1>
                        <div className={"my-2 w-full grid gap-4 grid-cols-5 "+latoFont.className}>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>1. </span>
                                Java
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>2. </span>
                                JavaScript
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>3. </span>
                                TypeScript
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>4. </span>
                                React JS
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>5. </span>
                                Next Js
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>6. </span>
                                Tailwind CSS
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>7. </span>
                                MongoDB
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>8. </span>
                                MySQL
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>9. </span>
                                Prisma
                            </div>
                            <div className={"text-blue-500 text-xl font-medium"}>
                                <span className={"text-black"}>10. </span>
                                SpringBoot
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"my-6 border-2 border-gray-100 shadow-lg shadow-gray-100 rounded-lg w-full h-1/2 p-8"}>
                    <div>
                        <h1 className={"text-black text-3xl "+latoFont.className}>Projects</h1>
                        <div className={"my-2 w-full grid gap-4 grid-cols-3"}>
                            {
                                ProjectDetails.map((project)=>{
                                    return(
                                        <ProjectTile id={project.id} title={project.title} url={project.url} short={project.short} description={project.description}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={"w-full h-12 flex flex-row justify-center"}>*/}
            {/*    <div className={"w-96 h-full flex flex-row justify-evenly"}>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </main>
    )
}
