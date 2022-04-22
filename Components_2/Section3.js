import React from "react";
import {useRouter} from "next/router";
import {InstagramOutlined,LinkedinOutlined,GithubOutlined, MailOutlined} from  "@ant-design/icons";

function Sec3() {
    const router = useRouter();
    return (<>
        <section className="three container-fluid" id="three" style={{backgroundColor:"white",height:"auto"}}>
            <div className="who container">
                    
                    <p className="fnt1"style={{fontFamily:"Abril Fatface",fontSize:"70px",paddingLeft: "4.2rem",paddingRight: "3.2rem",color:"purple"}}>02</p>
                    <div className="row">
                    <div className="col-md-12" >
                            <h1 className="namee my-5 mx-5" style={{ fontFamily: "'Bebas Neue', cursive"}}> Connect with me!</h1>
                            {/* <p className="mx-5">Lets get in touch , Come On!
                            </p> */}
                            
                            <div className="row">
                            
                                <div className="col-md-1">
                                    <InstagramOutlined onClick={()=>{router.push("https://www.instagram.com/fifi_______x/")}} className="my-5 soci insta mx-5" style={{ fontSize: '50px',}} />
                                </div>
                                <div className="col-md-1">
                                    <LinkedinOutlined  onClick={()=>{router.push("https://www.linkedin.com/in/mohammed-sahad-s-345552206/")}} className="my-5 soci linked mx-5" style={{ fontSize: '50px',}} />
                                </div>
                                <div className="col-md-1">
                                    <GithubOutlined onClick={()=>{router.push("https://github.com/sahad0")}}  className="my-5 soci git mx-5" style={{ fontSize: '50px',}}  /> 
                                </div>
                                
                                <div className="col-2">
                                    <MailOutlined onClick={()=>{router.push("https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=sahadwg@gmail.com")}} className="my-5 soci mail mx-5" style={{ fontSize: '50px',}}  /> 
                                </div>
                                <div className="col-2">
                                    
                                </div>
                            </div>

                            
                        </div>
                       
                    </div>
                    
                </div>
            </section>
    </>)
};

export default Sec3;