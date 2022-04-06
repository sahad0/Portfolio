import React, { useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

	const[ref,inView] = useInView({
        threshold:0.5
    })
    const animations = useAnimation();

    useEffect(()=>{
        if(inView){
            console.log(inView);
            animations.start({
                y : 0,
                opacity:1,
              transition:{duration:2,delay:0},
              
            })
          }
          else{
              console.log(false);
            animations.start({
                y : 200,
                opacity : 0,
            transition:{duration:2,delay:0},
            })
          }
    },[inView]);


	return (
		<>
        
		
		
            <motion.div  ref={ref} className='card-body lc '  variants={basicFramer} animate={animations}> 
                <img  className='img-fluid lap ' draggable="false" src="./images/lap.png"></img>
            </motion.div>
        
		
		
		</>
		
	);
}

export default RightBar;

