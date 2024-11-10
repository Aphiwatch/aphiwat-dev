"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.2, ease: "easeIn" }
            }}
            >
                {/* image */}
                <div className="w-[200px] h-[200px] xl:w-[400px] xl:h-[400px]">
                    <Image 
                        src="/aphiwat-dev/assets/01.PNG"
                        // src="./assets/01.PNG"
                        priority 
                        quality={100} 
                        fill 
                        alt="" 
                        className="object-contain"
                    />
                </div>
                {/* circle */}
        
            </motion.div>
        </div>
    )
}

export default Photo;
