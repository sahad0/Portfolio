import React from "react";
import {Comment,Avatar} from "antd";
import {useRouter} from "next/router";


function Sec2() {

    const router = useRouter();
    return(<>
        <section className="two container-fluid" style={{backgroundColor:"white",}}>
            <div className="container row" style={{fontFamily:"'Bebas Neue', cursive",fontWeight:"100"}}>
                <div className="col-md-8 nami">
                    <div className="nam">
                    <h1 className="namee my-5 mx-5"> About Me</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="mx-5 my-4">Mohammed Sahad S</h4>
                            <h6 className="mx-5 my-1">22th SEPT   ,2001</h6>
                            <h6 className="mx-5 my-1">Designer/Developer</h6>
                            <h6 className="mx-5 my-1">+91  6383844237</h6>
                            <h6 className="mx-5 my-1">INDIA</h6>
                        </div>
                        <div className="col-md-3">
                            <h4 className="mx-5 my-4">Skill Sets</h4>
                            <h6 className="mx-5 my-1">HTML  /  CSS</h6>
                            <h6 className="mx-5 my-1">Javascript</h6>
                            <h6 className="mx-5 my-1">JSX</h6>
                            <h6 className="mx-5 my-1">Next.js</h6>
                        </div>
                        <div className="col-md-6" style={{borderLeft:"1px solid black"}}>
                            <h4 className="mx-5 my-4">Accomplishments</h4>

                            <div className="mx-5 my-1" onClick={()=>{router.push("https://624c87a3e2ad0210c5928906--mewbook.netlify.app/")}}>
                            <Comment  className="cmt"
                                author={<a href="https://624c87a3e2ad0210c5928906--mewbook.netlify.app/">Mew_Book</a>}
                                avatar={<Avatar className="img-fluid" src="./images/mew_news.png" alt="Mew_Book" />}
                                content={
                                    <p>
                                    (Photo Sharing App)
                                    </p>
                                }
                                
                                
                            />
                            </div>



                            
                            
                        </div>
                        <div className="col-md-12">
                        <button class="btn my-4 mx-5">
                        <span class="btn__inner">
                            <span class="btn__slide"></span>
                            <span class="btn__content"style={{letterSpacing:"3px",fontSize:"22px"}} >Hire   Me</span>
                        </span>
                        </button>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                <img src="./images/chiib.png" className="img-fluid chiib" ></img>
                </div>
            </div>
            
        

        </section>
    </>)
};

export default Sec2;