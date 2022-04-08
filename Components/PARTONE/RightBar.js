import React, { useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



 function RightBar() {

	const[ref,inView] = useInView({
        threshold:0.5
    });

    

    const animations = useAnimation();

    useEffect(()=>{
        if(inView){
            
            animations.start({
                scale:0.7,
                y : 0,
                opacity:1,
              transition:{duration:2,delay:0},
              
            })
          }
          else{
              
            animations.start({
                scale:0.7,
                y : 200,
                opacity : 0,
            transition:{duration:2,delay:0},
            })
          }
    },[inView]);


	return (
		<>
                <motion.div  ref={ref} className='card-body lc ' animate={animations}> 
                    <img  className='img-fluid lap ' draggable="false" src="./images/lap.png"></img>
                </motion.div>
		</>
		
	);
}

export default RightBar;

