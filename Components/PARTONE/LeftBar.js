import React from "react";
import {motion} from "framer-motion";

const basicFramer = {

    initial : {
        x : -100,
        opacity : 0,
       
    },

    animate : {
        x : 0,
        opacity:1,
        
    },
    exit : {
        x : 0,
        opacity:1,
       
    }

}



function LeftBar() {
    return (
    <div  className="container-fluid"  >
        
        <motion.h4 variants={basicFramer} initial="initial" animate="animate" transition={{duration:2,}} className="hfour" style={{color:"white",paddingLeft:"10%",}}>
            <span  
            
            
            className="hcolor display-2">H</span>
        <span className="h1color display-1">ello,</span>
        
        <br/>My name is <span className="hello" style={{color:"#d94ef5"}}>Fif</span> and I am a <span className="" style={{color:"#d94ef5"}}>Web </span>Designer / Dev.</motion.h4>
    
        

    </div>
    
    
    
    );
};

export default LeftBar;