

import Navbar from '../Components/Navbar';
import LeftBar from '../Components/PARTONE/LeftBar';
import RightBar from '../Components/PARTONE/RightBar';
import Svvg from '../Components/PARTTHREE/SVGGS';
import PinkFrame from '../Components/PARTTWO/Frame';

import LeftBar2 from '../Components/PARTTWO/LeftBar';



// const LapFrame = loadable(() => import("../Components/PARTONE/RightBar.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });
// const PinkFrame = loadable(() => import("../Components/PARTTWO/Frame.js"), {
//   fallback:  <div className="example"><Spin /></div>
// });






export default function Home() {




  return (
  <>
  
    <Navbar />
     <div className='container-fluid c1' style={{height:"auto",width:"100%",backgroundColor:"black",margin:"auto",padding:"auto"}}>
       
          <div className='row'>
            <div className='col-md-5'style={{margin:"0",padding:"0",}}>
              <LeftBar />
            </div>
            <div className='col-md-7'>
            
            <RightBar />
            </div>
          </div>
     </div>
     <div className='container-fluid c2' style={{height:"auto",width:"100%",backgroundColor:"black",marginTop:"0",padding:"auto"}}>
        
           
        <p className='display-5 para ' align="center" style={{fontFamily:"'Roboto Slab', serif",color:'#d94ef5'}}> <span style={{color:'white',fontSize:'4vh',wordSpacing:'10px',fontWeight:100}}><span className='display-5'>W</span><span style={{fontSize:'5vh'}}>hat I</span> </span>L<span style={{fontSize:'5vh'}}>ove?</span> </p>
        <LeftBar2 />   
         <PinkFrame />


     </div>
    
     <div className='container-fluid c3' style={{height:"auto",width:"100%",backgroundColor:"black",marginTop:"0",padding:"auto"}}>
        <div className='row'>
          <div className='col-md-8'></div>
          <div className='col-md-4'>
            {/* <Svvg /> */}
          </div>
        </div>
     </div>

     
  </>
  );
}
