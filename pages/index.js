import Navbar from '../Components/Navbar';
import LeftBar from '../Components/PARTONE/LeftBar';
import RightBar from '../Components/PARTONE/RightBar';
import AvatarCard from '../Components/PARTTHREE/card';



import LeftBar2 from '../Components/PARTTWO/LeftBar';

import { motion ,useAnimation } from 'framer-motion';

import{useInView} from "react-intersection-observer";
import { useEffect } from 'react';
import MiniRight from '../Components/PARTONE/MiniRight';
import Typewriter from 'typewriter-effect';
import Typee from '../Components/PARTTHREE/typee';

// const LapFrame = loadable(() => import("../Components/PARTONE/RightBar.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });
// const PinkFrame = loadable(() => import("../Components/PARTTWO/Frame.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });

const framerAnime  = {
  initial : {
    x : -20,
    width:"50%",
  
    opacity:0,
    

  },
  anime : {
    width:"100%",
    x:0,
    opacity:1,
   

  },
  

}





export default function Home() {

 
  



  return (
  <>
  
    <Navbar />
    
     <div  className='container-fluid c1' style={{width:"100%",backgroundColor:"white"}}>
     <div className='weeb container-fluid' style={{color:"black",fontFamily: "'Bebas Neue', cursive"}}>
       <h1 className='hr my-2'>W</h1>
       <h1 className='hr'>E</h1>
       <h1 className='hr'>E</h1>
       <h1 className='hr'style={{color:"#d94ef5"}}>B</h1>
      </div>
          <div className='row' style={{backgroundColor:"white"}}>
            <div className='col-6' style={{height:"auto"}} >
              <LeftBar />
            </div>
            <div className='col-6 emp'>
             <motion.img  initial={{opacity:0,}} animate={{opacity:1}} transition={{delay:2,duration:1,}}  className='img-fluid' style={{scale:"0.8"}} src='./images/poki.png'></motion.img>
            </div>
            <div   className='col-12 eff'style={{backgroundColor:"#d94ef5"}}>
              
            <div className='row'>
              <div className='col-8'>
                <RightBar />
              </div>
              <div className='col-4'>
                <MiniRight />
              </div>
            </div>

            
            </div>
          </div>
     </div>
     <div className='container-fluid c22' style={{backgroundColor:"white",padding:"60px"}}><p className='display-5 para my-5 ' align="center" style={{fontFamily: "'Bebas Neue', cursive",color:'#d94ef5',}}> <span style={{color:'black',fontSize:'4vh',wordSpacing:'10px',fontWeight:100}}><span className='display-5'>W</span><span style={{fontSize:'5vh'}}>hat I</span> </span>L<span style={{fontSize:'5vh'}}>ove?</span> </p></div>
     <div className='container-fluid c2' style={{height:"auto",width:"100%",backgroundColor:"black",marginTop:"0",padding:"auto"}}>
        
           
        
        <LeftBar2 />   
         


     </div>
    
     <div className='container-fluid c3' style={{height:"auto",width:"100%",backgroundColor:"black",marginTop:"0",padding:"auto"}}>
        <div className='row'>
          <div className='col-lg-1'></div>
          <div className='col-lg-7' >
            <AvatarCard />
            
          </div>
          
          <div className='col-lg-4 ty'>
              
              <Typee />
          
          </div>
        </div>
     </div>

     
  </>
  );
}
