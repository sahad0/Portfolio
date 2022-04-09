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

const bFramer = {

    initial : {
        y : 15,
        opacity : 0,
       
    },

    animate : {
        y : 0,
        opacity:1,
        
    },
    
}





function LeftBar() {
    return (
    <div  className="container-fluid"  >
        
        <motion.h4 variants={basicFramer} initial="initial" animate="animate" transition={{duration:1.5,}} className="hfour" style={{color:"black",paddingLeft:"10%",}}>
            <span  
            
            
            className="hcolor display-2">H</span>
        <span className="h1color display-1">ello,</span>
        
        <br/>M<span style={{fontSize:"2.5vh"}}>y</span> N<span style={{fontSize:"2.5vh"}}>ame is </span> <span className="hello" style={{color:"#d94ef5"}}>F<span style={{fontSize:"2.5vh"}}>IF </span> </span>  <span style={{fontSize:"2.5vh"}}>AND </span> I <span style={{fontSize:"2.5vh"}}>am </span>A <span className="" style={{color:"#d94ef5"}}>D<span style={{fontSize:"2.5vh"}}>esigner </span> </span>/Dev.</motion.h4>
    
        <motion.button variants={bFramer} initial="initial" animate="animate" transition={{duration:1,delay:3.5}} className="btn btn--light my-5 mx-5">
        <span className="btn__inner">
            <span className="btn__slide" />
            <span className="btn__content">Explore Collections</span>
        </span>
        </motion.button>

    </div>
    
    
    
    );
};

export default LeftBar;