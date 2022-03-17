
import Navbar from '../Components/Navbar';
import LeftBar from '../Components/PARTONE/LeftBar';
import RightBar from '../Components/PARTONE/RightBar';






export default function Home() {
  return (
  <>
  
    <Navbar />
     <div className='container-fluid' style={{height:"200vh",width:"100%",backgroundColor:"black",}}>
       <div className='row'>
        <div className='col-md-5'style={{margin:"0",padding:"0",}}>
          <LeftBar />
        </div>
        <div className='col-md-7'>
          <RightBar />
        </div>
        </div>
     </div>
     
  </>
  );
}
