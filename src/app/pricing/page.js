"use client"
import Navbar from "../_components/_navbar"
import Image from "next/image"

import Basic from "../_components/pricing_plans/_basic"
import Premium from "../_components/pricing_plans/_premium"
import PremiumPlus from "../_components/pricing_plans/_premiumplus"
import { motion } from "framer-motion";
export default function Pricing(){
    return(
        <div className="w-full flex flex-col items-center text-center">
            <Navbar/>
            <div className="min-h-screen text-slate-50 lg:pt-40 pt-60"> 
            <Image 
                    alt="" 
                    width={1000} 
                    height={1000} 
                    src={"/images/beverage-5.jpg"}
                    placeholder="blur" blurDataURL="/images/beverage-1.jpg"
                    className="absolute brightness-20 top-[0vh] left-0 select-none -z-10 min-w-[100%] md:min-h-[100vh] min-h-[200vh] h-screen max-h-[500vh] object-cover object-bottom"/>
                <motion.h1
                initial={{opacity:0, y:-40}}
                animate={{opacity:1, y:0}}
                transition={{duration:1, delay:0.7}}
                className="text-4xl font-serif text-center">
                    Pricing
                </motion.h1>
                <motion.div 
                initial={{opacity:0, y:-40}}
                animate={{opacity:1, y:0}}
                transition={{duration:1.35, delay:0.5}}

                className="flex justify-center lg:flex-row flex-col items-center md:items-baseline gap-5 mt-10">
                    <Basic/>
                    <Premium/>
                    <PremiumPlus/>
                </motion.div>
            </div>
        </div>
    )
}