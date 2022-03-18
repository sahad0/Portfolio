
import Navbar from '../Components/Navbar';
import LeftBar from '../Components/PARTONE/LeftBar';
import RightBar from '../Components/PARTONE/RightBar';
import PinkFrame from '../Components/PARTTWO/Frame';
import LeftBar2 from '../Components/PARTTWO/LeftBar';







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
              <RightBar />
            </div>
          </div>
     </div>
     <div className='container-fluid c2' style={{height:"145vh",width:"100%",backgroundColor:"black",}}>
        
           
        <p className='display-5 para' align="center" style={{fontFamily:"'Roboto Slab', serif",color:'#d94ef5'}}> <span style={{color:'white',fontSize:'4vh',wordSpacing:'10px',fontWeight:100}}><span className='display-5'>W</span><span style={{fontSize:'5vh'}}>hat I</span> </span>L<span style={{fontSize:'5vh'}}>ove?</span> </p>
        <LeftBar2 />   
        <PinkFrame />


     </div>
     
  </>
  );
}
