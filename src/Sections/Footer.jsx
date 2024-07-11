import React from "react";
import { medicineImg } from "../assets/images";
import { FooterIcon, FooterLinks } from "../Constant";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer(){
    return (
        <footer className="flex justify-between p-4 max-md:flex-col max-md:gap-7 relative pb-7">
            <div>
                <div className="flex gap-2">
                    <img src={medicineImg} alt="medicine icon" height={25} width={25} />
                    <h1 className="font-palanquin text-white font-bold text-xl">MediInfoHub</h1>
                </div>
                <p className="text-white font-montserrat text-md mt-5 max-w-md"><span className="font-bold">Disclaimer:</span> The information provided on MediInfoHub is for educational purposes only and should not replace professional medical advice.</p>
                <div className="flex gap-2 mt-5">
                    {FooterIcon.map((logo, index)=>(
                        <a key={index} href={logo.href} >
                            <div key={index}className="bg-white h-10 w-10 flex justify-center items-center rounded-full">
                            <logo.icon />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex-1 flex justify-evenly gap-5">
                    {FooterLinks.map((link)=>(
                        <div key={link.title}>
                            <h1 className="text-white
                             font-palanquin text-lg font-bold text-center ">{link.title}</h1>
                            <ul className="text-center">
                                {link.links.map((l)=>(
                                    <li key={l} className="text-slate-gray font-montserrat mt-1 text-sm">
                                        <a href="/">{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
            <div className="absolute left-0 bottom-0 text-white flex justify-center items-center gap-2 max-sm:w-full text-center">
                <div><CopyrightIcon /></div>
                <p>Copyright: all rights are reserved</p>
            </div>
        </footer>
    );
}
export default Footer;