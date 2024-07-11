import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
function Button(){
    return (
        <div>
            <a className='flex font-montserrat justify-center items-center px-4 py-2 bg-pale-green text-white gap-2 rounded-full w-[160px] cursor-pointer hover:bg-green-800' href="#search">Search Now <SearchIcon /></a>
        </div>
    );
}
export default Button;