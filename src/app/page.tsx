'Use client'
import React from "react";
import Hero from "@/app/components/Hero";
import MainSofa from "@/app/components/mainsofa";
import InstagramSection from "@/app/components/instagramsection";
import Sofas from "./components/sofas";
export default function Home(){
  return(
    <div>
    <Hero/>
    <MainSofa/>
    <Sofas/>
    <InstagramSection/>

  
    </div>
  )
}