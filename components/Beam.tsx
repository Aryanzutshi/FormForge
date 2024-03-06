"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beams";

export function TracingBeamDemo() {
  return (
    <div id="about" className=" bg-black text-white  w-full">
      <TracingBeam className=" bg-black text-white px-6 w-full">
        <div className=" max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge("text-xl mb-4")}>
                {item.title}
              </p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Here's a list of features in FormForge:",
    description: (
      <>
        <ul>
          <li>

            Personalized Workouts,Exercise Library
          </li>
          <li>

            Progress Tracking,
          </li>
          <li>


            Activity Tracking,
          </li>
          <li>

            Nutrition Tracking,
          </li>
          <li>

            Meal Plans,
          </li>
          <li>

            Virtual Coaching,
          </li>
          <li>

            Workout Reminders,
          </li>
          <li>

            Progress Photos,
          </li>

          <li>
            Integration with Fitness Wearables
          </li>
        </ul>


      </>
    ),
    badge: "FormForge",
    image:
      "/unity.png",
  },
  {
    title: "'Workout Tracker'",
    description: (
      <>
        <p>
        In the workout section of our fitness app, users discover tailored exercise routines designed to meet their fitness objectives. With customizable options and detailed instructions, users can seamlessly follow along and track their progress. From strength training to cardio, our app empowers users to achieve their fitness goals with confidence and efficiency.
        </p>
        <p>

        </p>
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "'1Activity Status'",
    description: (
      <>
        <p>
        The activity status section of our fitness app serves as a dynamic dashboard for users to monitor their daily physical endeavors. Here, users can seamlessly log their workouts, track their steps, and monitor calories burned, all within a user-friendly interface. With personalized goal-setting features and insightful data visualization, users can gain a deeper understanding of their activity levels and make informed decisions to optimize their fitness journey. Motivational prompts and challenges further elevate the experience, fostering a supportive environment that empowers users to stay committed and achieve their wellness goals.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjAfile:///home/accidentalgenius/Downloads/Screenshot_20240306_043327(2).jpg3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
