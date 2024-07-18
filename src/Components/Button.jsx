import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);
function Button(){
    function handleClick(){
        console.log(2);
            gsap.to(window, {duration:1, scrollTo:{y:'#search', offsetY:70}});
       
    }
    return (
        <div>
            <button onClick={handleClick} className='flex font-montserrat justify-center items-center px-4 py-2 bg-pale-green text-white gap-2 rounded-full w-[160px] cursor-pointer hover:bg-green-800'>Search Now <SearchIcon /></button>
        </div>
    );
}
export default Button;