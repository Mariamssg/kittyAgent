"use client";
import React, { useEffect, useState } from "react";
import SimliAgent from "@/app/SimliAgent";
import DottedFace from "./Components/DottedFace";
import Image from "next/image";
import GitHubLogo from "@/media/github-mark-white.svg";

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
    setShowDottedFace(true);
  };



  return (
    <div className="bg-[#FF69B4] min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">


      <div className="absolute top-[32px] right-[32px] flex gap-4">
        <button
          onClick={() => window.open("https://github.com/simliai/create-simli-agent")}
          className="flex items-center gap-2 px-4 py-2 bg-white text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50/10 transition-colors"
        >
          <Image className="w-[20px]" src={GitHubLogo} alt="GitHub" />
          GitHub
        </button>
        <button
          onClick={() => {
            const email = prompt("Enter your email:");
            if (email) {
              localStorage.setItem('userEmail', email);
              alert('Logged in successfully!');
            }
          }}
          className="flex items-center gap-2 px-4 py-2 bg-white text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50/10 transition-colors"
        >
          Login
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 bg-[#FFB6C1]/50 p-6 pb-[40px] rounded-xl w-full border border-[#FFB6C1]/50">
        <div>
          {showDottedFace && <DottedFace />}
          <SimliAgent
            onStart={onStart}
            onClose={onClose}
          />
        </div>
      </div>

      <div className="max-w-[350px] font-thin flex flex-col items-center ">
        <span className="font-bold mb-[8px] leading-5 ">
          WELCOME TO BSF AI TOOL
        </span>
      </div>
    </div>
  );
};

export default Demo;
