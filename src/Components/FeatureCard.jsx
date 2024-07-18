import React from "react";
function FeatureCard({imgURL, label, content}){
    return (
        <div className="w-[300px] p-5 shadow-2xl rounded-xl" >
            <img id="info" src={imgURL} alt={label} width={300} height={180} />
            <h1 id="info" className="mt-5 font-palanquin font-bold text-lg">{label}</h1>
            <p id="info" className="mt-2 font-montserrat text-slate-gray">{content}</p>
        </div>
    );
}
export default FeatureCard;