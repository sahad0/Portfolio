import React, { useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const framer = {
  initial:{
    scale:0.4,
    y : 200,
    opacity : 0,
  },
  animate:{
    scale:0.7,
    y : 0,
    opacity:1,
  },
  
}


 function RightBar() {

	



	return (
		<>
                <motion.div variants={framer} initial="initial" whileInView="animate" transition={{delay:1.3,duration:1.4}} viewport={{once:true}} className='card-body lc ' > 
                    <img  className='img-fluid lap ' draggable="false" src="./images/lap.png"></img>
                </motion.div>
		</>
		
	);
}

export default RightBar;

