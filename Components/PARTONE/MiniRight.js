import React,{useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion"


function MiniRight() {


    const[ref,inView] = useInView({threshold:0.1});

    

    const animations = useAnimation();

    useEffect(()=>{
        if(inView){
            console.log(inView);
            animations.start({
                
                opacity:1,
              transition:{delay:2,duration:1},
              
            })
          }
          else{
              console.log(false);
            animations.start({
                
                opacity : 0,
            transition:{delay:2,duration:1},
            })
          }
    },[inView]);



    return (<>
    
    <motion.div ref={ref} animate={animations} transition={{delay:5}} className='col-12 my-5' align="center" style={{fontFamily:"'Roboto Slab', serif",fontSize:"5vh",fontWeight:"2px"}} >Tech Stacks</motion.div>
        <motion.div  animate={animations} className='row'>
            <div className='col-4 '>
                <img className='img-fluid techimg' src= "./images/javasr.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <img className='img-fluid techimg' src= "./images/next.png" /> 
            </div>
        </motion.div>
        <motion.div animate={animations}  className='row'>
            <div className='col-4 '>
                <img className='img-fluid techimggit' src= "./images/git.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <img className='img-fluid tech' src= "./images/html.png" /> 
            </div>
        </motion.div>
        
        <motion.div animate={animations}  className='row'>
            <div className='col-4 '>
                <img className='img-fluid techimg abcd'  src= "./images/css.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <img className='img-fluid techimg' src= "./images/frob.png" /> 
            </div>
        </motion.div>
    </>)
};

export default MiniRight;