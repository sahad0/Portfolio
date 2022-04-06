import Navbar from '../Components/Navbar';
import LeftBar from '../Components/PARTONE/LeftBar';
import RightBar from '../Components/PARTONE/RightBar';
import AvatarCard from '../Components/PARTTHREE/card';

import PinkFrame from '../Components/PARTTWO/Frame';

import LeftBar2 from '../Components/PARTTWO/LeftBar';

import { motion ,useAnimation } from 'framer-motion';

import{useInView} from "react-intersection-observer";
import { useEffect } from 'react';
import MiniRight from '../Components/PARTONE/MiniRight';


// const LapFrame = loadable(() => import("../Components/PARTONE/RightBar.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });
// const PinkFrame = loadable(() => import("../Components/PARTTWO/Frame.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });

const framerAnime  = {
  initial : {
    x : 90,
    width:"0%",
  
    opacity:0,
  },
  anime : {
    width:"100%",
    x:0,
    opacity:1,
  },

}




export default function Home() {

  const [ref,inView] = useInView({
    threshold:0.3
  });
  const animations = useAnimation();

  

  useEffect(()=>{
    
    if(inView){
      animations.start({
        width:"100%",
        x:0,
        opacity:1,
        transition:{duration:2,when:"beforeChildren"},
        
      })
    }
    else{
      animations.start({
        x : -20,
      width:"50%",
      opacity:0,
      transition:{duration:2,when:"beforeChildren"},
      })
    }

  },[inView]);

  return (
  <>
  
    <Navbar />
     <div  className='container-fluid c1' style={{width:"100%",backgroundColor:"blue"}}>
       
          <div className='row' style={{backgroundColor:"black"}}>
            <div className='col-6' style={{height:"100vh"}} >
              <LeftBar />
            </div>
            <div className='col-6 emp'>
             <motion.img  initial={{opacity:0,}} animate={{opacity:1}} transition={{delay:2,duration:1,}}  className='img-fluid' style={{scale:"0.8"}} src='./images/poki.png'></motion.img>
            </div>
            <motion.div ref={ref} variants={framerAnime}  animate={animations} className='col-12'style={{backgroundColor:"#d94ef5"}}>
              
            <div className='row'>
              <div className='col-8'>
                <RightBar />
              </div>
              <div className='col-4'>
                <MiniRight />
              </div>
            </div>

            
            </motion.div>
          </div>
     </div>
     <div className='container-fluid c2' style={{height:"auto",width:"100%",backgroundColor:"black",marginTop:"0",padding:"auto"}}>
        
           
        <p className='display-5 para  ' align="center" style={{fontFamily:"'Roboto Slab', serif",color:'#d94ef5',paddingTop:"10%",}}> <span style={{color:'white',fontSize:'4vh',wordSpacing:'10px',fontWeight:100}}><span className='display-5'>W</span><span style={{fontSize:'5vh'}}>hat I</span> </span>L<span style={{fontSize:'5vh'}}>ove?</span> </p>
        <LeftBar2 />   
         <PinkFrame />


     </div>
    
     <div className='container-fluid c3' style={{height:"auto",width:"100%",backgroundColor:"black",marginTop:"0",padding:"auto"}}>
        <div className='row'>
          <div className='col-lg-1'></div>
          <div className='col-lg-7' >
            <AvatarCard />
            
          </div>
          
          <div className='col-lg-4'>
            
          </div>
        </div>
     </div>

     
  </>
  );
}
