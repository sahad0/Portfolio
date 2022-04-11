import React from "react";
import Navbar from "../Components/Navbar";

function Profile() {
    return(<>
    
        <Navbar/>
        <section className="two container-fluid" style={{backgroundColor:"white",height:"100vh",}}></section>
            <section className="one container-fluid" style={{backgroundColor:"white",height:"100vh",}}>
                <div className="who container">
                    
                    <p className="fnt"style={{fontFamily:"Abril Fatface",fontSize:"70px",paddingLeft: "4.2rem",paddingRight: "3.2rem",color:"purple"}}>01</p>
                    
                    
                </div>

            </section>
           
            <section className="three container-fluid" style={{backgroundColor:"white",height:"100vh",}}>
            <div className="who container">
                    
                    <p className="fnt1"style={{fontFamily:"Abril Fatface",fontSize:"70px",paddingLeft: "4.2rem",paddingRight: "3.2rem",color:"purple"}}>02</p>
                    
                    
                </div>
            </section>
        
    </>)
};

export default Profile;