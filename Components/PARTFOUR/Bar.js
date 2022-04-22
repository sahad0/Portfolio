import React from "react";
import { motion } from "framer-motion";

function MainBar() {

    const move = {
        initial:{
            
            opacity:0,
        },
        animate:{
            
            opacity : 1,
        }
    }


    return (
    <>
     
      <motion.img variants={move} initial="initial" whileInView="animate" viewport={{once:true}} transition={{delay:1.6,duration:1.4}} src="./images/mew_news.png" className="img-fluid"></motion.img>
       
    </>);
};

export default MainBar;