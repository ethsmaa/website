'use client';
import React, { useEffect } from "react";
import Lottie from "lottie-react";

import animationData from "../lotties/computer-animation.json";
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { particleConfig } from '../utils/constants'
import { loadSlim } from "@tsparticles/slim";
import { SocialsData } from "../utils/constants";
import Image from 'next/image';



export const Hero: React.FC = () => {

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);

        });
    }, []);

    return (
        <section className="hero">
            <Particles
                options={particleConfig}

            />
            <div className="grid grid-cols-1 sm:grid-cols-12 min-h-screen">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">hello, i&apos;m{" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[

                                'esma',
                                1000,
                                'frontend developer',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />

                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6">
                        I am passionate about learning new things, supporting open source projects, and indulging in <i>web design</i> and <i>pixel art</i>.
                    </p>
                    <div>

                        <a href="/cv.pdf" target="_blank">

                            <button className="px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <span className="block bg-slate-900 rounded-full hover:bg-slate-800 px-5 py-2 text-white" >
                                    download CV
                                </span>
                            </button>
                        </a>

                    </div>
                    <div className="flex mt-5 justify-center sm:justify-start">
                        {SocialsData.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="mx-2 sm:mx-5 no-underline text-inherit transition transform hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image src={social.src} alt={social.name} width={social.width} height={social.height} />
                            </a>


                        ))}
                    </div>
                </div>

                <div className="col-span-5 place-self-center">

                    <Lottie
                        animationData={animationData}
                        height={400}
                        width={400}
                    />


                </div>

            </div>


        </section>
    );
};

