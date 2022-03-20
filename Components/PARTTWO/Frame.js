import React from "react";
import {motion,AnimatePresence} from 'framer-motion';

function PinkFrame({src}) {
    return(
        <AnimatePresence>
            <iframe  className="responsive-iframe pinkframe"src={src} frameBorder='0'  width='770px' height='640px'></iframe>
        </AnimatePresence>

    );
};

export default PinkFrame;