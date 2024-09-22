import { ThreeDCardDemo } from "@/components/3DCard";
import { TracingBeamDemo } from "@/components/Beam";
import { BackgroundGradientDemo } from "@/components/Cards";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGemini";
import { HeroParallaxDemo } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Nav";
// import { NavbarDemo } from "@/components/Nav";
import { SparklesPreview } from "@/components/SparkleText";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";
import { TypewriterEffectSmoothDemo } from "@/components/Typo";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
   <FloatingNavDemo/>
    <TypewriterEffectSmoothDemo/>
     <SparklesPreview/> 
     <TextGenerateEffectDemo/> 
     <BackgroundGradientDemo/> 
     <HeroParallaxDemo/>
    <TracingBeamDemo/>
    <GoogleGeminiEffectDemo/>
    <ThreeDCardDemo/>
    </>
  );
}
