import React from "react";
import Navbar from "../Components/Navbar";

function Profile() {
    return(<>
    
        <Navbar/>
        <section className="two container-fluid" style={{backgroundColor:"white",height:"100vh",}}>
        <div className="container row" style={{fontFamily:"'Bebas Neue', cursive",fontWeight:"100"}}>
            <div className="col-6 nam">
                
                <h1 className="namee my-5"> About Me</h1>

                <div className="row">
                    <div className="col-6">
                        <h4 className="mx-5 my-4">Mohammed Sahad S</h4>
                        <h6 className="mx-5 my-1">22th SEPT   ,2001</h6>
                        <h6 className="mx-5 my-1">Designer/Developer</h6>
                        <h6 className="mx-5 my-1">+91  6383844237</h6>
                    </div>
                    <div className="col-6">
                        <h4 className="mx-5 my-5">Skill Sets</h4>
                        <h6 className="mx-5 my-1">HTML  /  CSS</h6>
                        <h6 className="mx-5 my-1">Javascript</h6>
                        <h6 className="mx-5 my-1">JSX</h6>
                        <h6 className="mx-5 my-1">Next.js</h6>
                    </div>
                </div>
            </div>
        </div>
        <img src="./images/chiib.png" className="img-fluid" style={{paddingLeft:"65%",position:"static"}}></img>

        </section>
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