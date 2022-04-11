import React from "react";
import Typewriter from 'typewriter-effect';

function Typee() {
    return(<>
        <Typewriter
                  
                  options={{
                    loop:true,
                    autoStart:true,
                  }}

                  onInit={(typewriter) => {
                    typewriter.typeString('<h1 class="woah display-1 my-5">D<span class="swo">ecode</span><span class="woah1"> M<span class="swo">Y</span></span></br>C<span class="typee">I</span>P<span class="typee">H</span>E<span class="typee">R</span></h1>')
                      .pauseFor(1500)
                      
                      .start();
                  }}
              />
    </>);
};

export default Typee;