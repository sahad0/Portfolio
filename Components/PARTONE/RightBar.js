import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
const basicFramer = {

    initial : {
        x : 0,
        opacity : 0,
       
    },

    animate : {
        x : -20,
        opacity:1,
        
    },
    exit : {
        x : -20,
        opacity:1,
       
    }

}

 function RightBar({src, height,width}) {

	


	return (
		<>
        
		<AnimatePresence >
		<motion.div variants={basicFramer} initial="initial" animate="animate" transition={{delay:1,duration:1.4}}  className='container-fluid xs' style={{margin:"0",padding:"0",}}>
        <iframe src={src} width={width} height={height} scrolling="no"></iframe>
		</motion.div>
		</AnimatePresence>
		</>
		
	);
}

export default RightBar;

