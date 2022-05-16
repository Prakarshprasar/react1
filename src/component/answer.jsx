import React from "react";
// let arr1=["Android","Blackberry","IPhone","Windows Phone"];
// let arr2=["Samsung","HTC","Micromax","Apple"]
const Answer=({arr})=>{
    return <ul>
        {arr.map((user)=>(
            <li>{user}</li>
        ))}
    </ul>
}



export default Answer;