import axios from "axios";
import { useRef, useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { ImSpinner2 } from "react-icons/im";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const CommentComponent = () => {
    const email = useRef<string>("");
    const message = useRef<string>("");
    const [sending, setSending] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const [messageSent, setMessageSent] = useState<boolean>(false);

    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    const sendMessage = async () => {
        if (email.current == "" || message.current == "") return setErrMsg("Please fill out all fields!");

        setSending(true);

        let response = await axios.post("/api/sign", {
            message: message.current,
        });

        if (response.data.result === "FIELD_EMPTY") return setErrMsg("Please fill out all fields!");
        if (response.data.result === "DISCORD_API_ERROR") return setErrMsg("Something went wrong... 😓");

        setSending(false);

        return setMessageSent(true);
    };

    return (
        <div className="md:col-span-2 h-auto min-h-[21.5rem] row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-red-800/50">
            <AnimatePresence exitBeforeEnter>
                {messageSent && (
                    <motion.p
                        key={"contactThankYou"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="w-full h-full flex items-center justify-center text-gray-400 text-sm"
                    >
                        Thanks signing my guestbook! 🎉
                    </motion.p>
                )}
                {!messageSent && (
                    <motion.div
                        key={"contactForm"}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="items-start flex flex-row justify-start mr-4">
                        <Image
                            src="https://s.tigerlake.xyz/r/idYJnR6YE1.jpeg"
                            width={64}
                            height={64}
                            className="rounded-full object-cover"
                            alt="Picture of a cat hiding under a magazine, being not found"
                        />

                        <div className="w-[450px] ml-4">
                        <h1 className="font-bold text-sm dark:text-slate-500 mb-1">MESSAGE</h1>
                        <textarea
                            placeholder="Hey Zac, how's it going?"
                            onChange={(e: any) => (message.current = e.target.value)}
                            className="w-full min-h-[9rem] p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
                        />
                        
                        <div className="w-full flex flex-row justify-between items-center">
                            <p className="text-gray-900 dark:text-gray-300 text-sm">{errMsg}</p>

                            <button
                                data-umami-event="sendMessage"
                                onClick={sendMessage}
                                className="border border-gray-800 hover:bg-gray-200 dark:border-red-600/80 dark:bg-red-600/70 dark:hover:bg-red-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
                            >
                                <span className="mt-[2px]">Send</span>
                                {!sending && <RiSendPlane2Fill className="ml-2" />}
                                {sending && <ImSpinner2 className="w-4 h-4 ml-2 animate-spin" />}
                            </button>
                        </div>  
                        </div>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CommentComponent;
