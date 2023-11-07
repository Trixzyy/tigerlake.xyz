import { useEffect, useState } from "react";

const TimeStatus = () => {
    const [time, setTime] = useState<string>(getCurrentTime());
    const [awake, setAwake] = useState<boolean>(true);

    function getCurrentTime() {
        const current = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
        return `${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`;
    }

    useEffect(() => {
        const updateInterval = setInterval(() => {
            const currentTime = getCurrentTime();
            setTime(currentTime);

            if (new Date().getHours() < 7) {
                setAwake(false);
            } else {
                setAwake(true);
            }
        }, 1000); // Update every second

        return () => {
            clearInterval(updateInterval); // Clean up the interval on component unmount
        };
    }, []);

    return (
        <p className="text-black/50 dark:text-white/50 text-sm mb-10">
            It's currently <span className="font-semibold text-black/60 dark:text-white/60">{time}</span> for me, so I'm
            probably{" "}
            <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "awake" : "sleeping"}</span>. I'll
            get back to you soon.
        </p>
    );
};

export default TimeStatus;
