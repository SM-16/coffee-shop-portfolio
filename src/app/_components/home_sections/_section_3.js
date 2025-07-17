import Image from "next/image"
import Link from "next/link"


export default function Section3(){
    return(
        <div id="card" className="border-b border-slate-600 flex flex-col justify-center h-screen lg:hidden">
            <Image 
                alt="" 
                width={1000} 
                height={800} 
                src={"/images/beverage-3.jpg"}
                className="absolute brightness-20 top-[200vh] left-0 select-none -z-10 min-w-[100%] h-[100vh] object-cover object-bottom"/>
                
                
   
        </div>
    )
}