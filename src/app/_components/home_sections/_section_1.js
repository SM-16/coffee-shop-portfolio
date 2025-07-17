import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Section1(){
    
    return(
        <div id="card" className="flex flex-col items-center gap-2 justify-center h-[100vh] border-b border-slate-600">
            <Image loading="lazy" placeholder="blur" blurDataURL="/images/beverage-1.jpg" width={500} height={400} className="absolute brightness-20 top-0 left-0 select-none -z-10 min-w-[100%] h-[100vh] object-cover object-top" alt="beverage" src={"/images/beverage-1.jpg"} />
            <motion.h1 
            initial={{y:-60, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.25, delay:0.25}}
            className="md:text-7xl text-3xl  text-slate-100 ">“The best beverage I've ever drunk”</motion.h1>
            <motion.p
            initial={{y:-40, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1, delay:0.25}}
            className="text-slate-300 mx-40 font-serif md:visible invisible">
                Reprehenderit nostrud reprehenderit ad ad aute ipsum. Velit fugiat nulla consequat occaecat voluptate culpa occaecat. Magna enim magna consequat est cillum laboris in. Dolor ut enim est eu fugiat ad. Dolore labore consectetur voluptate dolore ex deserunt.
            </motion.p>
            <motion.div
            initial={{y:-80, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1, delay:0.25}}
            className="flex lg:flex-row flex-col lg:-mt-0 -mt-[540px]">
                <Link href={"/pricing"} className="flex items-center mt-10 md:gap-2 text-slate-50 rounded-full bg-sky-600 hover:bg-sky-700 brightness-90 py-3 px-4 cursor-pointer group transition-all">
                    <svg className="group-hover:rotate-[30deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/></svg>
                    <span className="select-none">
                        Make your order
                    </span>
                </Link>
                <Link href={"/about_us"} className="flex items-center mt-10 md:gap-2 text-slate-50 rounded-full brightness-90 py-3 px-4 cursor-pointer group">
                    <span className="select-none">
                        More Information
                    </span>
                    <svg className="absolute ml-[124px] group-hover:ml-[128] transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </Link>
            </motion.div>
            
        </div>
    )
}