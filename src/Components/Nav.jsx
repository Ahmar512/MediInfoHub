import React, { useState } from "react";
import { navLinks } from "../Constant";
import MenuIcon from '@mui/icons-material/Menu';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav(){
    useGSAP(()=>{
        gsap.from('#link',{
            y:-100,
            duration:1,
            stagger:0.2,
            ease:'back.out'
        })
        
    },[])
    const [flag, setFlag] = useState(false);
    function handleClick(){
        setFlag(preValue => !preValue);
    }
    return (
        <header className="px-10 py-8 w-full absolute  z-10 max-sm:pl-4">
            <nav className="flex  justify-between items-center max-container">
                <a href="/"><h1 className="font-palanquin text-pale-green font-bold text-2xl">MediInfoHub</h1></a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden transition-transform">
                    {navLinks.map((link)=>(
                        <li id="link" key={link.label}>
                            <a href={link.href} className="text-slate-gray font-montserrat leading-normal">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <div onClick={handleClick} className="flex lg:hidden border-[1px] border-slate-gray w-[40px] h-[40px] justify-center items-center rounded-lg">
                    <MenuIcon />
                </div>
            </nav>
            {flag ?<div data-aos="fade-left" className="text-center flex lg:hidden  justify-end">
                <ul className="bg-white w-full sm:w-[250px] border-2 border-slate-gray rounded-2xl">
                {navLinks.map((link)=>(
                        <li key={link.label} className="p-2 ">
                            <a href={link.href} className="text-slate-gray font-montserrat">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div> : null}
        </header>
    );
}
export default Nav;