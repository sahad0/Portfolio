import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
const basicFramer = {

    initial : {
        y : 0,
        opacity : 0,
       
    },

    animate : {
        y : -100,
        opacity:1,
        
    },
    exit : {
        
        opacity:1,
       
    }

}

 function RightBar() {

	


	return (
		<>
        
		
		<motion.div  variants={basicFramer} initial="initial"  animate="animate" transition={{delay:2,duration:2}}  className='container-fluid xs my-3' style={{margin:"0",padding:"0",}}>
            <div className='card lc' style={{width:"80%"}} > mx-3
                <img className='img-fluid lap' draggable="false" src="./images/lap.png"></img>
            </div>
        
		</motion.div>
		
		</>
		
	);
}

export default RightBar;

