import React, { useState } from "react";
import axios from "axios"; 
import SearchIcon from '@mui/icons-material/Search';
function Search(){
    const [name, setName] = useState("");
    const [info, setInfo] = useState({});
    const [flag, setFlag] = useState(false);
    const [exp, setErr] = useState(false);
    function handleChange(event){
        let temp = event.target.value;
        setName(temp);
        console.log(name);
    }
    async function handleClick(){
        setFlag(false);
        setName("");
        setErr(false);
        const API_URL = "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo";
        try{
            const response = await axios.get(API_URL,{
                params:{
                    drug : name
                },
                headers: {
                    'X-RapidAPI-Key': 'd8c40080b7msha138fb6d00fff70p1d1829jsn318c011a2a38',
                    'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
                  }
            });
            const result = response.data;
   
            setInfo(preValue=>{
                return result[0];
            });
            console.log(info);
            setFlag(true);
            
        }catch(error){
            setErr(true);
            console.log(error);
        }
    }
    

    return (
        <div id="search" className="py-40 px-10 lg:py-40 flex flex-col justify-center items-center max-sm:px-2">
            <div className="h-14 w-[40%] flex gap-2 justify-between border-2 border-slate-gray pr-2 py-2 pl-5 rounded-full max-lg:w-full">
                <input type="text" onChange={handleChange} value={name} className="flex-1 font-montserrat border-none outline-none" placeholder="Enter Medicine Name..."/>
                <button onClick={handleClick} className="bg-pale-green w-[120px] rounded-full text-white font-montserrat">Search <span className="w-[25px] h-[25px]"><SearchIcon /></span></button>
            </div>
            {flag ? <div data-aos="fade-in" className="grid grid-cols-2 mt-14  bg-slate-gray">
                <p className="info">Brand Name : </p>
                <p className="info">{info.brand_name}</p>
                <p className="info">Ingredients : </p>
                <p className="info">{info.active_ingredients.map((ing, index)=>(
                    <p key={index}>{ing.name}-{ing.strength}</p>
                ))}</p>
                <p className="info">Dosage Form : </p>
                <p className="info">{info.dosage_form}</p>
                <p className="info">Generic Name</p>
                <p className="info">{info.generic_name}</p>
                <p className="info">Labeler Name : </p>
                <p className="info">{info.labeler_name}</p>
                <p className="info">Product Type : </p>
                <p className="info">{info.product_type}</p>
                <p className="info">Route :</p>
                <p className="info">
                    {info.route.map((r)=>(
                        <p key={r}>{r}</p>
                    ))}
                </p>
            </div> : null}
            {exp ? <p data-aos="fade-in" className="text-center py-24 max-sm:py-12">
                Medicine information not available in database.
            </p> : null}
        </div>
    );
}
export default Search;