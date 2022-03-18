import React from "react";
import { motion } from "framer-motion";

function LeftBar2() {
    return (
    <>
        <div className="container seccont" style={{backgroundColor:'black'}}>
            <div className="card">
                <div className="card-body ">
                    
                        <motion.img whileHover={{scale:1.1}} className="img-fluid anime" src="./images/anime.jpg" alt="Anime" />
                </div>  
            </div> 
            <div className="card">
                <div className="card-body ">
                    
                        <motion.img whileHover={{scale:1.1}} className="img-fluid anime" src="./images/game1.png" alt="Anime" />
                </div>  
            </div>  
            <div className="card">
                <div className="card-body ">
                    
                        <motion.img whileHover={{scale:1.1}} className="img-fluid anime" src="./images/design1.png" alt="Anime" />
                </div>  
            </div> 
            <div className="card">
                <div className="card-body ">
                    
                        <motion.img whileHover={{scale:1.1}} className="img-fluid anime" src="./images/travel.png" alt="Anime" />
                </div>  
            </div>  
                
            
        </div>;

    </>)
    

};

export default LeftBar2;