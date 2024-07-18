import React from "react";
import { medicineImg } from "../assets/images";
import Button from "../Components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Hero(){
    const tl = gsap.timeline({});
    useGSAP(()=>{
        tl.from('#title',{
            x:-400,
            duration:2,
            opacity:0,
            ease:'bounce.out'
        }),
        gsap.from('#name',{
            x:400,
            duration:2,
            opacity:0,
            ease:'bounce.out'
        }),
        tl.from('#logo',{
            opacity:0,
            y:50,
            duration:1,
            stagger:0.1
        })
    },[])
    return (
        <section className="flex max-lg:flex-col
        gap-10 min-h-screen px-5 justify-around max-lg:py-20 max-sm:px-2 max-sm:min-h-[80%] ">
            <div className="w-full lg:w-2/5 flex flex-col justify-center ">
                <h1 id="title" className="font-palanquin text-6xl mb-10 font-bold max-sm:text-5xl">Welcome to <br /> <span className="text-pale-green flex "><p id="logo">Me</p><p id="logo">di</p><p id="logo">Ln</p><p id="logo">fo</p><p id="logo">Hub</p></span></h1>
                <p id="name" className="font-montserrat text-pale-green font-bold text-xl mb-5">Your Trusted Source for Comprehensive Medicine Information</p>
                <p className="font-montserrat">At MediInfoHub, our mission is to provide accurate, up-to-date, and comprehensive information about medicines to help you make informed decisions about your health. Whether you're a healthcare professional, a patient, or just someone seeking to learn more about various medications, we've got you covered.</p>
                <div className="mt-10">
                <Button />
                </div>
            </div>
            <div className="flex justify-center items-center max-sm:hidden  ">
                <img src={medicineImg} alt="medicine icon" width={400} height={300} />
            </div>
        </section>
    );
}
export default Hero;