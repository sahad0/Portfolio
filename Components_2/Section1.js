import React from "react";

function Sec1() {
    return (<>
            <section className="one container-fluid" style={{backgroundColor:"white",}}>
                <div className="who container">
                    
                    <p className="fnt"style={{fontFamily:"Abril Fatface",fontSize:"70px",paddingLeft: "4.2rem",paddingRight: "3.2rem",color:"purple"}}>01</p>
                    <div className="row">
                        <div className="col-md-6" >
                            <h1 className="namee my-5 mx-5" style={{ fontFamily: "'Bebas Neue', cursive"}}> Who am I?</h1>
                            <p className="mx-5">My name is Sahad,I am a self taught developer ,I love designing and building Web Applications.I am also a weeb who love playing games and watching anime.
                                I like playing with effects and animations, they amaze me so much .... I have been in love with these scripts..
                            </p>
                            <p className="mx-5">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The next thing I love is Music they fill me with happiness, to be frank they make me creative especially the Lofi's....!

                            </p>

                            
                        </div>
                        <div className="col-md-6">
                                <div className="card profcard" >
                                    
                                        <img className="img-fluid profimg" src="./images/sahad1.png"></img>
                                    
                                </div>
                        </div>
                    </div>
                     
                </div>

            </section>
    </>)
};

export default Sec1;