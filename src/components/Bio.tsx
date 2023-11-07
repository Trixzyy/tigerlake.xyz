import { useLanyard } from "use-lanyard";
import { motion } from "framer-motion";
import Image from "next/image";

const Bio = () => {
    const { data: user } = useLanyard("992171799536218142");

    if (!user) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
    
            <div className="mt-36 w-full h-[6rem] flex flex-row  justify-start mb-12">
                <img
                    src={"https://cdn.discordapp.com/avatars/" + user.discord_user.id + "/" + user.discord_user.avatar + "?size=512"}
                    className="w-[7.5rem] h-[7.5rem] rounded-full mr-4 pointer-events-none"
                    alt="Trixzy's Avatar"
                />
                <div className="w-156 h-full flex flex-col items-start ">
                <h1 className="font-bold text-4xl md:text-5xl">Hey, I'm {user.discord_user.username}</h1>
                    <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
                        hello 1243
                        
                        <div className="flex items-center">
                        <span className="ml-2 w-2 h-2"></span>
                            <span className="absolute w-2 h-2 bg-green-600 rounded-full" />
                        <h1 className="text-black dark:text-gray-100 font-semibold text-base flex">
                              {user.discord_status}
                        </h1>
                        </div>
                        
                            
                            
                        
    

                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Bio;
