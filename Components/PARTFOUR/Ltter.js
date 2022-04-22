import React from "react";
import {  motion } from "framer-motion";

const move = {
    initial : {
        y:20,
        opacity:0,
    },
    animate : {
        y:0,
        opacity:1,
    }
}


function Ltter() {
    return (
    <>
        <motion.p variants={move} initial="initial"   whileInView="animate" className='display-5 para my-5 '  style={{fontFamily: "'Bebas Neue', cursive",color:'#d94ef5',}}> <span style={{color:'black',fontSize:'4vh',wordSpacing:'10px',fontWeight:100}}><span className='display-5'>P</span><span style={{fontSize:'5vh'}}>roject</span> </span>W<span style={{fontSize:'5vh'}}>orks</span> </motion.p>

    </>);
};

export default Ltter;