import React from "react";
import { motion } from "framer-motion";

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


function Lbar() {
    return (<>
        <motion.h4 variants={move} initial="initial" whileInView="animate" viewport={{once:true}} transition={{delay:1}} className="display-5 mx-5">Mew_App</motion.h4>
        <br></br>
        <motion.p variants={move} initial="initial" whileInView="animate" viewport={{once:true}} transition={{delay:1.2}} className='mx-5'>
          A photobook where u can share and create memories of you .Love & Share.<br></br>Don't let yourself fade your memories.....
        </motion.p>
        <motion.button variants={move} initial="initial" whileInView="animate" viewport={{once:true}} transition={{delay:1.4}} className="btn btn-dark mx-5 my-5" >Explore Features</motion.button>
    </>
    );
};

export default Lbar;