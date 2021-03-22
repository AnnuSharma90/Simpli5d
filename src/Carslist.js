import React from "react";
import Cars from "./Cars";
import {database} from "./database.js"

function Carslist(){
    //console.log("test log")
    return(
        <>
        {database.map((car,i) => {
            return(
                <Cars 
                key={database[i].id}
                id={database[i].id}
                src={database[i].src}
                name={database[i].name}
                price={database[i].price}
                />
            )
        })}
        
        </>
    )
};
export default Carslist;