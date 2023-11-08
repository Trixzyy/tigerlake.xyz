import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const TimeStatus = () => {
  const [time, setTime] = useState<string>(getCurrentTime());
  const [awake, setAwake] = useState<boolean>(isAwake());

  function getCurrentTime() {
    const current = DateTime.now().setZone("Europe/London");
    return current.toFormat("HH:mm");
  }

  function isAwake() {
    const currentHour = DateTime.now().setZone("Europe/London").hour;
    return currentHour >= 7 && currentHour <= 23;
  }

  useEffect(() => {
    const updateInterval = setInterval(() => {
      const currentTime = getCurrentTime();
      const isAwakeNow = isAwake();
      setTime(currentTime);
      setAwake(isAwakeNow);
    }, 1000);

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  return (
    <p className="text-black/50 dark:text-white/50 text-sm mb-10">
      It's currently <span className="font-semibold text-black/60 dark:text-white/60">{time}</span> for me, so I'm probably{" "}
      <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "awake" : "asleep"}</span>. I'll get back to you soon.
    </p>
  );
};

export default TimeStatus;
