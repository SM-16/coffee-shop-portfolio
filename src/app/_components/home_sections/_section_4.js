import Image from "next/image"
import Link from "next/link"
import Basic from "../pricing_plans/_basic"
import Premium from "../pricing_plans/_premium"
import PremiumPlus from "../pricing_plans/_premiumplus"
export default function Section4(){
    return(
        <div id={"card-larger"} className=" h-[172vh]">
            <Image 
                alt="" 
                width={1000} 
                height={800} 
                src={"/images/beverage-5.jpg"}
                className="absolute brightness-20 top-[300vh] lg:top-[200vh] left-0 select-none -z-10 min-w-[100%] h-[172vh] object-cover"/>
            <div className="h-full w-full text-slate-50 flex lg:flex-row flex-col justify-center lg:items-baseline items-center lg:pt-60 lg:gap-20 gap-4">
                <Basic/>
                <Premium/>
                <PremiumPlus/>
            </div>

        </div>
    )
}