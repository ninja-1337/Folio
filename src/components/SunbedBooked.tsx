import  Link  from "next/link";
import sunbedbooked from "/images/booked.jpg"
import Image from "next/image";
import {useState} from "react";

const Sunbed = () => {

    const handleClick = () =>{

        alert("This Sunbed is Booked")
    }


    const [width, setCount] = useState(40);

    const [height, setHeight] = useState(70)

    return (
        <Image
            src={sunbedbooked}
            alt="Picture of the author"
            width={width}
            height={height}

            onClick={handleClick}
            onMouseOver={()=>{
                setCount(80)
                setHeight(80)
            }}
            onMouseLeave={()=>{
                setCount(40)
                setHeight(70)
            }}
        />

    );
};
 export default Sunbed;
