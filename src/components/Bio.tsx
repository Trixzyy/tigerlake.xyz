import { useLanyard } from "use-lanyard";
import { motion } from "framer-motion";
import Image from "next/image";

const Bio = () => {
    const { data: user } = useLanyard("992171799536218142");

    if (!user) {
        return null;
    }

    let statusColor = "stone"; // Default color
    let statusName = "Unknown"; // Default status name

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
            <div className="mt-36 w-full h-[6rem] flex flex-row  justify-start">
                <img
                    src={
                        "https://cdn.discordapp.com/avatars/" +
                        user.discord_user.id +
                        "/" +
                        user.discord_user.avatar +
                        "?size=512"
                    }
                    className="w-[7.5rem] h-[7.5rem] rounded-full mr-4 pointer-events-none"
                    alt="Trixzy's Avatar"
                />
                <div className="w-156 h-full flex flex-col items-start ">
                    <h1 className="font-bold text-3xl">Hey, I'm {user.discord_user.username}</h1>
                    <div className="flex items-center mt-2">
                        <span className="ml-2 w-2 h-2"></span>
                        <span className={"absolute w-2 h-2 rounded-full" + ` bg-${statusColor}-600`} />
                        <h1 className="text-black dark:text-gray-300 text-base flex">
                            {statusName}
                        </h1>
                    </div>
                    <div className="flex items-center mt-4">
                        
                        <h1 className="text-black dark:text-gray-100 text-base flex">
                            A full stack web devloper
                        </h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Bio;
