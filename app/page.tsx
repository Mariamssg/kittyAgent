"use client";
import React, { useEffect, useState } from "react";
import SimliAgent from "@/app/SimliAgent";
import DottedFace from "./Components/DottedFace";
import Menu from "./Components/Menu";
import TopButtons from "./Components/TopButtons";

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
    <div className="bg-[#FF69B4] min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8 relative">
      <Menu />


      <div className="absolute top-[32px] right-[32px]">
        <TopButtons />
      </div>
      <div className="flex flex-col items-center gap-6 bg-[#FFB6C1]/50 p-6 pb-[40px] rounded-xl w-full border border-[#FFB6C1]/50">
        <div>
          <DottedFace style={{ backgroundColor: 'pink' }} />
          <SimliAgent
            onStart={onStart}
            onClose={onClose}
          />
        </div>
      </div>
      <div className="max-w-[350px] font-thin flex flex-col items-center">
        <span className="font-bold mb-[8px] leading-5">
          WELCOME TO BSF AI TOOL
        </span>
      </div>
    </div>
  );
};

export default Demo;
