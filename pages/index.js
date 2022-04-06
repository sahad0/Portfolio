import Navbar from '../Components/Navbar';
import LeftBar from '../Components/PARTONE/LeftBar';
import RightBar from '../Components/PARTONE/RightBar';
import AvatarCard from '../Components/PARTTHREE/card';

import PinkFrame from '../Components/PARTTWO/Frame';

import LeftBar2 from '../Components/PARTTWO/LeftBar';

import { motion } from 'framer-motion';


// const LapFrame = loadable(() => import("../Components/PARTONE/RightBar.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });
// const PinkFrame = loadable(() => import("../Components/PARTTWO/Frame.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });

const framerAnime  = {
  initial : {
    y : 90,
  
    opacity:0,
  },
  anime : {
    y:0,
    opacity:1,
  },

}




export default function Home() {




  return (
  <>
  
    <Navbar />
     <div className='container-fluid c1' style={{width:"100%",backgroundColor:"blue"}}>
       
          <div className='row' style={{backgroundColor:"black"}}>
            <div className='col-5' >
              <LeftBar />
            </div>
            <motion.div variants={framerAnime} initial="initial" animate="anime" transition={{delay:2,duration:"1"}} className='col-7 'style={{backgroundColor:"#d94ef5"}}>
            
            <RightBar />
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
