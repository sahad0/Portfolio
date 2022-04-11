import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import {motion} from "framer-motion"
function AvatarCard() {

   
    

    const router = useRouter();
    const[load,setLoad] = useState(false);
    useEffect(()=>{
        if(load){
            window.location.href="/profile"
        }
    },[load]);
    

    function routProfile(){
        setTimeout(()=>{
            setLoad(true);
        },[5000])
    }
    

    return (<>
        <div className='card avc my-5'  style={{height:"auto",marginLeft:"25%",}} >
           
            
            
            
            <div className='card-body' data-bs-toggle="modal" data-bs-target="#myModal">
                <p style={{color:"black",fontFamily:"'Roboto Slab', serif"}} align="center">ƎM ЯƎHԳIƆƎႧ</p>
                <img onClick={routProfile}  src='./images/avatar-removebg.png'   className='img-fluid' style={{height:"auto",width:"auto",}}/>
            </div>
            

           
        </div>
    
        <>
      


        <div className="modal" id="myModal" >
        <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content" style={{background:"transparent",border:"none"}}>

            
         

            
            <div className="modal-body" style={{border:"none"}}>
            <motion.svg 
                
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                width="200px"
                height="200px"
                viewBox="0 0 190.45 144.26"
                fill={"black"}
            
                >
                    <motion.path initial={{opacity:0,pathLength:0}}
                animate = {{opacity:1,pathLength:1}}
                transition={{yoyo: Infinity, duration:2,}}
                stroke='#d94ef5'className="st0" d="M17.5,121.02l-17-22V0.5h14l17,19l17-19h16l6,178l-20-32l-2-117l-13,9l-17-17L17.5,121.02z"/>
            <motion.path initial={{opacity:0,pathLength:0}}
                animate = {{opacity:1,pathLength:1}}
                transition={{yoyo: Infinity, duration:2,}}
                stroke='#d94ef5'className="st0" d="M80.5,61.02l16,11l8,17.48l12-28.48l-36-15V0.5h65V45l-18-11.98l-1-22h-28l-1,11l48,32v19l-65,101V61.02z"/>
               
                
            </motion.svg>
            
            </div>

            

            </div>
        </div>
        </div>
    </>
        
    </>);
};

export default AvatarCard;