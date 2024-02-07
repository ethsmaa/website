/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";

export const Email: React.FC = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            email: e.currentTarget.email.value,
            subject: e.currentTarget.subject.value,
            message: e.currentTarget.message.value,
        };

        const json = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: json,
        };

        try {
            const res = await fetch(endpoint, options);
            if (!res.ok) throw new Error(res.statusText);
            const result = await res.json();
            console.log(result);
            alert("message sent!");

        } catch (error) {
            console.error("error", error);
            alert("message not sent!");
        }

    }

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-20">
            <div>
                <h5 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mb-7">contact with me! <span className="text-white">✨</span> </h5>
                <p className="text-slate-300 text-lg">
                    {" "}
                    excited to connect with you! whether you have an exciting project in mind, want to dive into the latest tech trends, or just drop a friendly "hello," i'm all ears. i'm open to new opportunities and ideas!
                </p>
            </div>
            <div>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit} >
                    <label htmlFor="email" className="text-white block  text-lg font-medium">your email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="bg-transparent border-b-2  mb-5  border-slate-300 text-white focus:outline-none focus:border-pink-500 transition ease-in-out duration-300 placeholder:text-md"
                        placeholder="enter email address" />
                    <label htmlFor="subject" className="text-white block text-lg font-medium">subject</label>
                    <input
                        type="text"
                        id="subject"
                        required
                        className="bg-transparent border-b-2 mb-5 border-slate-300 text-white focus:outline-none focus:border-pink-500 transition ease-in-out duration-300 placeholder:text-md"
                        placeholder="enter subject" />
                    <label htmlFor="message" className="text-white block  text-lg font-medium">message</label>
                    <input type="text" id="message" required className="bg-transparent border-b-2 mb-5 border-slate-300 text-white focus:outline-none focus:border-pink-500 transition ease-in-out duration-300 placeholder:text-md" placeholder="enter your message" />
                    <button className="bg-gradient-to-br from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg font-medium py-2 rounded-md">
                        send
                    </button>
                </form>
            </div>
        </section>
    );
}

