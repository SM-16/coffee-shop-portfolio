import Image from "next/image"
import Link from "next/link"
import Benefit from "../_benefits"


export default function Section2(){
    return(
        <div id="card" className="border-b border-slate-600 lg:h-[100vh] minh-[200vh]">
            <Image 
                alt="" 
                width={1000} 
                height={1000} 
                src={"/images/beverage-2.jpg"}
                className="absolute brightness-20 top-[100vh] left-0 select-none -z-10 min-w-[100%] h-[100vh] object-cover object-  "/>
            <div>

            <h2 className="text-3xl pt-40 font-serif bg-gradient-to-tr pb-2 from-amber-100 via-amber-50 to-amber-100 backdrop:shadow-xl  text-transparent bg-clip-text">“The story goes on since 1956...”</h2>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:col-span-2 lg:content-center flex flex-col justify-center mt-10">
                <Benefit title="Paul Deussen" description="Sit incididunt minim dolore ipsum reprehenderit non pariatur sunt et minim cupidatat quis amet. Ex amet ut esse irure nisi aute dolor. Sunt tempor cillum in enim mollit." benefitNumber={1}/>
                <Benefit title="Carl von Gersdorff" description="Elit sunt irure Lorem ut reprehenderit amet quis. Velit elit velit adipisicing in elit pariatur dolor. Excepteur excepteur magna non adipisicing non culpa duis eu esse incididunt id dolore cupidatat." benefitNumber={2}/>
                <Benefit title="Franz Overbeck" description="Elit voluptate aliqua adipisicing voluptate duis excepteur fugiat esse quis cupidatat id. Consequat velit consequat et officia ex laboris Lorem ad in ut ea. Ex deserunt cillum ut." benefitNumber={3}/>
                <Benefit title="Friedrich Nietzsche" description="Officia velit ad cupidatat tempor amet. Esse cillum dolor in reprehenderit elit esse eu consectetur elit enim. Aliqua occaecat fugiat ut cillum cillum. Qui ipsum esse occaecat amet tempor ex adipisicing." benefitNumber={4}/>
            </div>
        </div>
    )
}