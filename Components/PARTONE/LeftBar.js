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
    <motion.div  className="container-fluid" variants={basicFramer} initial="initial" animate="animate" transition={{duration:2,}} style={{margin:"0",padding:"0",}}>
        
        <h4 className="hfour" style={{color:"white",marginLeft:"20%",}}>
            <span  
            
            
            className="hcolor display-2">H</span>
        <span className="h1color display-1">ello,</span>
        
        <br/>My name is <span className="hello" style={{color:"#d94ef5"}}>Fif</span> and I am a <span className="" style={{color:"#d94ef5"}}>Web </span>Designer / Dev.</h4>
    </motion.div>);
};

export default LeftBar;