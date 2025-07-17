"use client"
import { motion } from "framer-motion";
import Navbar from "../_components/_navbar"
import Image from "next/image"
import "@/app/globals.css"

export default function AboutUs(){
    return(
        <div className=" min-h-screen h-[100vh] text-center ">
            <Navbar/>
            <Image 
                alt="" 
                width={1200} 
                height={500} 
                src={"/images/beverage-4.jpg"}
                placeholder="blur" blurDataURL="/images/beverage-1.jpg"
                className="absolute brightness-20 top-[0vh] left-0 select-none -z-10 min-w-[100%] md:min-h-[100vh] min-h-[160vh] object-cover"/>
            
            <div className=" bg-transparent md:pt-40 pt-72 ">
                <motion.h1
                initial={{y:-20, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1.25, ease:"backInOut", delay:1.1}}
                className="text-slate-100 text-center text-3xl">
                    About Us
                </motion.h1>
                <motion.p 
                    initial={{y:-20, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:1.25, ease:"backInOut", delay:1.1}}
                    className="text-center text-slate-100 font-serif">
                    Non sint do cupidatat quis aliquip exercitation ipsum voluptate tempor minim ipsum ex sit.
                </motion.p>
                <section className="flex flex-col gap-10 text-slate-300  text-justify mt-5 text-sm">
                    <motion.p 
                    initial={{y:-20, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.6, ease:"easeInOut", delay:1.1}}
                    className="clear-left text-center mx-28">
                        Sint sunt magna magna nostrud voluptate nostrud sit qui. In ullamco nulla ut tempor officia nostrud consequat elit ad non exercitation proident voluptate nisi. Consectetur nisi laboris aliqua ipsum qui enim. Excepteur est adipisicing eu amet pariatur.
                    </motion.p>
                    <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} transition={{duration:1.5, delay:0.65}} className="flex justify-center gap-10 rounded-xl">
                        <Image  className="object-cover max-h-500 w-[300px] rounded-xl brightness-80 grayscale-40" width={500} height={300} alt="Restaurant image" src={"/images/about_us.jpg"}/>
                        <Image  className="object-cover max-h-500 w-[300px] rounded-xl brightness-80 grayscale-40 md:visible invisible" width={500} height={300} alt="Restaurant image" src={"/images/about_us_2.jpg"}/>
                        <Image  className="object-cover max-h-500 w-[300px] rounded-xl brightness-80 grayscale-40 md:visible invisible" width={500} height={300} alt="Restaurant image" src={"/images/about_us_3.jpg"}/>
                    </motion.div>

                        {/* <motion.p 
                        initial={{x:-500, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:2, ease:"easeInOut"}}
                        className="clear-left text-center">
                            Sint sunt magna magna nostrud voluptate nostrud sit qui. In ullamco nulla ut tempor officia nostrud consequat elit ad non exercitation proident voluptate nisi. Consectetur nisi laboris aliqua ipsum qui enim. Excepteur est adipisicing eu amet pariatur.
                        </motion.p>
                        <motion.p 
                        initial={{x:500, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:2, ease:"easeInOut"}}
                        className="clear-left text-center">
                            Sint sunt magna magna nostrud voluptate nostrud sit qui. In ullamco nulla ut tempor officia nostrud consequat elit ad non exercitation proident voluptate nisi. Consectetur nisi laboris aliqua ipsum qui enim. Excepteur est adipisicing eu amet pariatur.
                        </motion.p> */}
    
                        

                       


   
                </section>
             </div>
        </div>
    )
}