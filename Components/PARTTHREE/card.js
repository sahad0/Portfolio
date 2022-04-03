import React, { useEffect, useState } from "react";
import {Modal,Button} from "antd";
function AvatarCard() {

   
    


    

    return (<>
        <div className='card avc my-5 ' style={{height:"auto",width:"30%"}} >
           
            
            {/* <motion.svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                width="250px"
                height="250px"
                viewBox="0 0 190.45 144.26"
                
            
                >
               
                <motion.path 
                
                initial={{opacity:0,pathLength:0}}
                animate = {{opacity:1,pathLength:1}}
                transition={{yoyo: Infinity, duration:3,ease:"easeInOut"}}
                stroke='#d94ef5' className="st0" d= "M26.38,143.76l47.28-77.62l35.22,27.06L94.82,2.83l94.69,140.93H0.92L93.13,0.27"/>
            </motion.svg> */}
            
            <div className='card-body' >
                <p style={{color:"black",fontFamily:"'Roboto Slab', serif"}} align="center">ƎM ЯƎHԳIƆƎႧ</p>
                <img src='./images/avatar-removebg.png' className='img-fluid' style={{height:"auto",width:"auto",}}/>
            </div>
            

           
        </div>
    

        
    </>);
};

export default AvatarCard;