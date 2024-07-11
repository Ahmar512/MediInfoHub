import React from "react";
import { navLinks } from "../Constant";
import MenuIcon from '@mui/icons-material/Menu';
function Nav(){
    return (
        <header className="px-10 py-8 w-full absolute z-10 max-sm:pl-4">
            <nav className="flex  justify-between items-center max-container">
                <a href="/"><h1 className="font-palanquin font-bold text-2xl">MediInfoHub</h1></a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((link)=>(
                        <li key={link.label}>
                            <a href={link.href} className="text-slate-gray font-montserrat">{link.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex lg:hidden border-[1px] border-slate-gray w-[40px] h-[40px] justify-center items-center rounded-lg">
                    <MenuIcon />
                </div>
            </nav>
        </header>
    );
}
export default Nav;