import React from "react";
import MyInfo from "@/components/MyInfo";

export default function Home() {
    return (
        <>
            <h1 className="m-3 text-center">Présentation</h1>
            <div className="my-16 chat chat-end">
                <div className="chat-image avatar">
                    <div className="mx-2 w-16 bg-accent mask mask-heart"></div>
                </div>
                <div className="chat-header text-sm sm:text-xl text-pretty">
                    Développeuse Full Stack
                </div>
                <div className="chat-bubble p-5 text-lg sm:text-3xl">
                    Bonjour, je suis Céline Sou.
                    <br />
                    Voici mon portfolio!
                </div>
            </div>

            <MyInfo />
        </>
    );
}
