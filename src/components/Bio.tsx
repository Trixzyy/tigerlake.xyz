import { useLanyard } from "use-lanyard";
import { motion } from "framer-motion";
import Image from "next/image";

const Bio = () => {
    const { data: user } = useLanyard("992171799536218142");

    if (!user) {
        return (
            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-12"
        >
            <div className="mt-36 w-full h-[6rem] flex flex-row justify-start">
                <img
                    src={""}
                    className="w-[7.5rem] h-[7.5rem] rounded-full mr-4 pointer-events-none bg-stone-300 dark:bg-stone-700 animate-pulse"
                />
                <div className="w-156 h-full flex flex-col items-start ">
                    <h1 className="font-bold text-2xl md:text-3xl">Hey, I'm trixzy</h1>
                    <div className="flex items-center mt-2">
                        <span className="ml-2 w-2 h-2"></span>
                        <span className="absolute w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-500 animate-ping"/>
                        <span className="absolute w-2 h-2 bg-stone-300 dark:bg-stone-600 rounded-full" />
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 py-1 w-20">
                            <div className="h-4 bg-stone-300 dark:bg-stone-700 rounded col-span-4"></div>
                        </div>
                    </div>
                    </div>
                    <div className="flex items-center mt-4">
                        <h1 className="text-black dark:text-gray-100 text-sm md:text-base flex ">
                            A full stack web developer
                        </h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
        
    }

    let statusColor = "stone"; // Default color
    let statusName = "Unknown"; // Default status name

    // Weird way to use dynamic colors with tailwind because tailwind is funky
    let colours = "bg-green-500 bg-red-500 bg-yellow-500 bg-stone-500"

    if (user) {
        // Temp, testing
        statusColor = "red";

        if (user.discord_status === "online") {
            statusColor = "green";
            statusName = "Online";
        } else if (user.discord_status === "idle") {
            statusColor = "yellow";
            statusName = "Idle";
        } else if (user.discord_status === "dnd") {
            statusColor = "red";
            statusName = "Do Not Disturb";
        } else if (user.discord_status === "offline") {
            statusColor = "stone";
            statusName = "Offline";
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-12"
        >
            <div className="mt-36 w-full h-[6rem] flex flex-row justify-start">
                <img
                    src={
                        "https://cdn.discordapp.com/avatars/" +
                        user.discord_user.id +
                        "/" +
                        user.discord_user.avatar +
                        "?size=256"
                    }
                    className="w-[7.5rem] h-[7.5rem] rounded-full mr-4 pointer-events-none"
                    alt="Trixzy's Avatar"
                />
                <div className="w-156 h-full flex flex-col items-start ">
                    <h1 className="font-bold text-2xl md:text-3xl">Hey, I'm {user.discord_user.username}</h1>
                    <div className="flex items-center mt-2">
                        <span className="ml-2 w-2 h-2"></span>
                        <span className={"absolute w-2 h-2 rounded-full" + ` bg-${statusColor}-500`} />
                        <h1 className="text-black dark:text-gray-300 text-base flex">
                            {statusName}
                        </h1>
                    </div>
                    <div className="flex items-center mt-4">
                        <h1 className="text-black dark:text-gray-100 text-sm md:text-base flex ">
                            A full stack web developer
                        </h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Bio;
