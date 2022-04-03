import React, { useEffect, useState } from "react";
import {Modal,Button} from "antd";
import {motion} from "framer-motion"
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
                <img src='./images/avatar-removebg.png'  data-bs-toggle="modal" data-bs-target="#myModal" className='img-fluid' style={{height:"auto",width:"auto",}}/>
            </div>
            

           
        </div>
    
        <>
      


        <div class="modal" id="myModal" >
        <div class="modal-dialog modal-dialog-centered" >
            <div class="modal-content">

            
         

            
            <div class="modal-body" style={{backgroundColor:"black",paddingLeft:"75px"}}>
            <motion.svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                width="200px"
                height="200px"
                viewBox="0 0 190.45 144.26"
                style={{marginLeft:"100px"}}
            
                >
                    <motion.path initial={{opacity:0,pathLength:0}}
                animate = {{opacity:1,pathLength:1}}
                transition={{yoyo: Infinity, duration:2,}}
                stroke='#d94ef5'class="st0" d="M17.5,121.02l-17-22V0.5h14l17,19l17-19h16l6,178l-20-32l-2-117l-13,9l-17-17L17.5,121.02z"/>
            <motion.path initial={{opacity:0,pathLength:0}}
                animate = {{opacity:1,pathLength:1}}
                transition={{yoyo: Infinity, duration:2,}}
                stroke='#d94ef5'class="st0" d="M80.5,61.02l16,11l8,17.48l12-28.48l-36-15V0.5h65V45l-18-11.98l-1-22h-28l-1,11l48,32v19l-65,101V61.02z"/>
               
                {/* <motion.path 
                
                initial={{opacity:0,pathLength:0}}
                animate = {{opacity:1,pathLength:1}}
                transition={{yoyo: Infinity, duration:3,ease:"easeInOut"}}
                stroke='#d94ef5' className="st0" d= "M26.38,143.76l47.28-77.62l35.22,27.06L94.82,2.83l94.69,140.93H0.92L93.13,0.27"/> */}
            </motion.svg>
            
            </div>

            

            </div>
        </div>
        </div>
    </>
        
    </>);
};

export default AvatarCard;