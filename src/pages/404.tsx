import { motion } from "framer-motion";
import Image from 'next/image'

const NotFound = () => {
    return (
        <motion.div
            key="talk"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
            className="mt-36 mb-80 w-full"
        >
            <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Hmm... Thinking... 🤔</h1>
            <p className="text-black dark:text-gray-200 mb-6">It appears that what you're looking for isn't here.</p>
            <Image
                src="https://http.cat/images/404.jpg"
                width={404}
                height={404}
                alt="Picture of a cat hiding under a magazine, being not found"
            />  
        </motion.div>
    );
};

export default NotFound;
