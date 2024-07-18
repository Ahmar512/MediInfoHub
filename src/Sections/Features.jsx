import React from "react";
import { features } from "../Constant";
import FeatureCard from "../Components/FeatureCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Features(){
    useGSAP(()=>{

        let box = document.getElementById('feature');
        gsap.from(box,{
            x:-400,
            opacity:0,
            duration:4,
            ease:'power3.inOut',
            scrollTrigger:{
                trigger: '#features',
                start:'center, center',
                end:'top 20%',
                scrub:true,
            
            }
        }),
        gsap.from('#info',{
            scale:2,
            opacity:0,
            duration:0.5,
            stagger:0.1,
            scrollTrigger:{
                trigger: box,
                scrub:true,
                start: 'center, center',
                end:'top 20%',
            },
        })
    },[])
    return (
        <section id="features" className=" pt-5 px-24 max-sm:px-2">
            <h1 className="text-4xl font-bold font-palanquin text-center">Features About Used <span className="text-pale-green">API</span></h1>
            <p className=" text-center font-montserrat mt-5">The Drug Information and Price History API provides detailed drug information, including uses, side effects, dosages, and interactions, as well as historical price data to track medication price trends. It allows for comprehensive search and filtering to easily access specific drug data.</p>
            <div id="feature" className="flex flex-wrap justify-evenly gap-5 mt-10 " >
               {features.map((feature)=>(
                <FeatureCard
                    key={feature.label} 
                    imgURL = {feature.imgURL}
                    label = {feature.label}
                    content ={feature.content}
                />
               ))} 
            </div>
        </section>
    );
}
export default Features;