import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
const basicFramer = {

    initial : {
        y : 20,
        opacity : 0,
       
    },

    animate : {
        y : 0,
        opacity:1,
        
    },
    exit : {
        
        opacity:1,
       
    }

}

 function RightBar() {

	


	return (
		<>
        
		
		
            <motion.div className='card-body lc '  variants={basicFramer} initial="initial"  animate="animate" transition={{delay:4,duration:1}}> 
                <img className='img-fluid lap ' draggable="false" src="./images/lap.png"></img>
            </motion.div>
        
		
		
		</>
		
	);
}

export default RightBar;

