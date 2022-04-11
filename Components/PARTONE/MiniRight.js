import React,{useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion"

const framer = {
    initial : {
        opacity :0,
        
    },
    animate : {
        opacity :1,
        
    },
    
    
}

const listItems = {
    initial : {
        opacity :0,
        scale:0.6,
    
        
    },
    animate : {
        opacity :1,
        scale:0.6,
        
       
    },
    transition:{
        duration:1,
    }

}




function MiniRight() {


    // const[ref,inView] = useInView({threshold:0.2});

    

    // const animations = useAnimation();

    // useEffect(()=>{
    //     if(inView){
            
    //         animations.start({
               


    //             opacity : 1,
    //             y : 0,
    //             transition:{duration:3,ease:[0.6,0.01,-0.05,0.95],staggerChildren:0.35},
    //             scale:0.8,
    //         })
    //       }
    //       else{
            
    //         animations.start({
    //             opacity : 0,
    //             y:200,
    //             transition:{duration:3,ease:[0.6,0.01,-0.05,0.95],ease:"easeInOut",staggerChildren:0.35},
    //             scale:0.8,
                
    //         })
    //       }
    // },[inView]);



    return (<AnimatePresence >
    <motion.div variants={framer} initial="initial"  whileInView="animate" viewport={{once:true}} transition={{staggerChildren:0.35,ease:"easeInOut"}}>
    <motion.div variants={listItems}   className='col-12 my-5' align="center" style={{fontFamily:"'Roboto Slab', serif",fontSize:"30px",fontWeight:"2px"}} >Tech Stacks</motion.div>
        <motion.div  className='row'>
            <div className='col-4 '>
                <motion.img  variants={listItems}  className='img-fluid techimg a'  src= "./images/javasr.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <motion.img variants={listItems}  className='img-fluid techimg a'  src= "./images/next.png" /> 
            </div>
        </motion.div>
        <motion.div    className='row'>
            <div className='col-4 '>
                <motion.img variants={listItems}  className='img-fluid techimggit a'  src= "./images/git.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <motion.img  variants={listItems} className='img-fluid tech a'  src= "./images/html.png" /> 
            </div>
        </motion.div>
        
        <motion.div  className='row'>
            <div className='col-4 '>
                <motion.img variants={listItems}  className='img-fluid techimg abcd a'   src= "./images/css.png" />
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
                <motion.img variants={listItems}  className='img-fluid techimg my-2 a'  src= "./images/vercel.png" /> 
            </div>
        </motion.div>
        </motion.div>
    </AnimatePresence>)
};

export default MiniRight;