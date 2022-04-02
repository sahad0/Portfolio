import React from "react";
import  {motion} from 'framer-motion'
function Svvg() {

    const svgframer = {
        initial : {
            opacity:0,
            pathLength:0,
        },
        animate : {
            opacity:1,
            pathLength:1,
        }
    }


    return (
    <>
        <motion.svg 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            width="300px"
            height="300px"
            viewBox="0 0 190.45 144.26"
            
           
            >
            {/* <style type="text/css">
                .st0{fill:none;}
            </style> */}
            <motion.path 
            
            initial={{opacity:0,pathLength:0}}
            animate = {{opacity:1,pathLength:1}}
            transition={{yoyo: Infinity, duration:5,ease:"easeInOut"}}
            stroke='#d94ef5' className="st0" d= "M26.38,143.76l47.28-77.62l35.22,27.06L94.82,2.83l94.69,140.93H0.92L93.13,0.27"/>
        </motion.svg>
        {/* M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z */}
    </>)
    

};

export default Svvg;