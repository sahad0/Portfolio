

import Navbar from '../Components/Navbar';
import LeftBar from '../Components/PARTONE/LeftBar';

import LeftBar2 from '../Components/PARTTWO/LeftBar';

import loadable from "@loadable/component";
import { Spin ,Space } from 'antd';

const AmazonFrame = loadable(() => import("../Components/PARTONE/RightBar.js"), {
  fallback:  <div className="example"><Spin /></div>
});
const PinkFrame = loadable(() => import("../Components/PARTTWO/Frame.js"), {
  fallback:  <div className="example"><Spin /></div>
});






export default function Home() {
  return (
  <>
  
    <Navbar />
     <div className='container-fluid c1' style={{height:"120vh",width:"100%",backgroundColor:"black",}}>
       
          <div className='row'>
            <div className='col-md-5'style={{margin:"0",padding:"0",}}>
              <LeftBar />
            </div>
            <div className='col-md-7'>
            
            <AmazonFrame src = "https://my.spline.design/macbookprocopy-a0939a85464c60001698a92b0d8f8055/"  width="100%" height="750px" />
            </div>
          </div>
     </div>
     <div className='container-fluid c2' style={{height:"145vh",width:"100%",backgroundColor:"black",}}>
        
           
        <p className='display-5 para' align="center" style={{fontFamily:"'Roboto Slab', serif",color:'#d94ef5'}}> <span style={{color:'white',fontSize:'4vh',wordSpacing:'10px',fontWeight:100}}><span className='display-5'>W</span><span style={{fontSize:'5vh'}}>hat I</span> </span>L<span style={{fontSize:'5vh'}}>ove?</span> </p>
        <LeftBar2 />   
        <PinkFrame src='https://my.spline.design/untitled-a9499ce6274ffb432cc0c3e12704d5fd/' />


     </div>
     
  </>
  );
}
