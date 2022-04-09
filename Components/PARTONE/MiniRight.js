import React,{useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation,AnimatePresence} from "framer-motion"






function MiniRight() {


    const[ref,inView] = useInView({threshold:0.2});

    

    const animations = useAnimation();

    useEffect(()=>{
        if(inView){
            
            animations.start({
               


                opacity : 1,
                y : 0,
                transition:{duration:3,ease:[0.6,0.01,-0.05,0.95],staggerChildren:0.35},
                scale:0.8,
            })
          }
          else{
            
            animations.start({
                opacity : 0,
                y:200,
                transition:{duration:3,ease:[0.6,0.01,-0.05,0.95],ease:"easeInOut",staggerChildren:0.35},
                scale:0.8,
                
            })
          }
    },[inView]);



    return (<AnimatePresence>
    <motion.div ref={ref}  animate={animations}>
    <motion.div  animate={animations}  className='col-12 my-5' align="center" style={{fontFamily:"'Roboto Slab', serif",fontSize:"30px",fontWeight:"2px"}} >Tech Stacks</motion.div>
        <motion.div animate={animations} className='row'>
            <div className='col-4 '>
                <motion.img animate={animations}  className='img-fluid techimg'  src= "./images/javasr.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <motion.img animate={animations}  className='img-fluid techimg'  src= "./images/next.png" /> 
            </div>
        </motion.div>
        <motion.div animate={animations}   className='row'>
            <div className='col-4 '>
                <motion.img animate={animations}  className='img-fluid techimggit'  src= "./images/git.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <motion.img animate={animations}  className='img-fluid tech'  src= "./images/html.png" /> 
            </div>
        </motion.div>
        
        <motion.div animate={animations} className='row'>
            <div className='col-4 '>
                <motion.img animate={animations}  className='img-fluid techimg abcd'   src= "./images/css.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <motion.img animate={animations}  className='img-fluid techimg my-2'  src= "./images/vercel.png" /> 
            </div>
        </motion.div>
        </motion.div>
    </AnimatePresence>)
};

export default MiniRight;