import React from "react";
import { SkillsData } from "../utils/constants";
import Image from "next/image";


export const Skills: React.FC = () => {
    return (
        <div id="skills" className="flex flex-col items-center justify-center h-auto md:h-screen">
            <h1 className="font-semibold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
                skills{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                    {" "}
                    &{" "}
                </span>
                technologies
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {SkillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-3 border border-slate-400 px-4 py-6 rounded-lg mb-4 md:mb-0 hover:bg-slate-900 ">
                        <Image src={skill.Image} alt={skill.name} width={skill.width} height={skill.height} />
                        <p className="text-white text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

