"use client";

import Image from "next/image";
import React from "react";
// import rr from "../assets/rr.jpeg"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
  
export function ThreeDCardDemo() {
  return (
    <div className="bg-black w-full">

    <CardContainer className="inter-var ">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 text-white"
        >
         Download FormForge Now
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Your body is your lavda lasan quote aayega yaaha 
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/rr.jpeg"
            height="1000"
            width="1000"
            className="h-60 w-full object-center rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4  py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
             <a href="/download" target="blank">Download Now</a>1
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>

  );
}
