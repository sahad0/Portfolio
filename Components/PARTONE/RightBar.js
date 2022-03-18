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

 function RightBar() {

	


	return (
		<>
		<AnimatePresence >
		<div className='container-fluid xs' style={{margin:"0",padding:"0",}}>
            <motion.iframe
			variants={basicFramer}
			initial="initial"
			animate="animate"
			exit = "exit"
			transition={{delay:8.5,duration:2}}
			className="responsive-iframe"src='https://my.spline.design/macbookprocopy-a0939a85464c60001698a92b0d8f8055/' frameBorder='0'  width='770px' height='730px'></motion.iframe>
        </div>
		</AnimatePresence>
		</>
		
	);
}

export default RightBar;

