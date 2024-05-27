import { motion } from "framer-motion";
import CommentComponent from "../components/guestbook/CommentComponent";

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
            <h1 className="text-black dark:text-white font-bold text-3xl mb-3 mt-8">Guestbook</h1>
            <p className="text-black dark:text-gray-200 mb-6">Welcome to my guestbook! You can leave your mark here, I'd love to hear from you. Feel free to share your thoughts, comments, or any feedback you have.</p>
            <p className="text-black dark:text-gray-200 mb-6">Thank you for visiting!</p>

            <CommentComponent />
        </motion.div>
    );
};

export default NotFound;
