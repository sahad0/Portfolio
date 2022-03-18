import React from "react";
import {motion,AnimatePresence} from 'framer-motion';

function PinkFrame() {
    return(
        <AnimatePresence>
            <motion.iframe initial={{opacity:0}} animate={{opacity:1}} transition={{delay:17}} className="responsive-iframe pinkframe"src='https://my.spline.design/untitled-a9499ce6274ffb432cc0c3e12704d5fd/' frameBorder='0'  width='770px' height='640px'></motion.iframe>
        </AnimatePresence>

    );
};

export default PinkFrame;