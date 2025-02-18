import { TracingBeamDemo } from "@/components/Beam";
import { ThreeDCardDemo } from "@/components/3DCard";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGemini";
import { BackgroundGradientDemo } from "@/components/Cards";
import { HeroParallaxDemo } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Nav";
import { NavbarDemo } from "@/components/Nav";
import { TextGenerateEffectDemo } from "@/components/TextGenerate";
import { SparklesPreview } from "@/components/SparkleText";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { TypewriterEffectSmoothDemo } from "@/components/Typo";
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
