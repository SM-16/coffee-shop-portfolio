"use client"
import { useEffect, useState } from "react";
import Navbar from "@/app/_components/_navbar"

import Section1 from "./_components/home_sections/_section_1";
import Section2 from "./_components/home_sections/_section_2";
import Section3 from "./_components/home_sections/_section_3";
import Section4 from "./_components/home_sections/_section_4";

export default function Home() {

  return (
    <div className="text-center ">
      <Navbar></Navbar>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}
