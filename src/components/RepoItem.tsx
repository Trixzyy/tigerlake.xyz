import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";

const Languages = {
    TypeScript: "#2b7489",
    Python: "#3572A5",
    JavaScript: "#f7e025",
    Other: "#808080",
};

interface RepoProps {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: "TypeScript" | "Python" | "JavaScript" | "Other";
}

const RepoItem = ({ name, description, stars, forks, language }: RepoProps) => {
    // Check if description is null or undefined, and handle accordingly
    const truncatedDescription =
        description && description.length > 150 ? description.slice(0, 147) + "..." : description;

    // Check if the language is known, and if not, set it to "Other"
    const displayLanguage = Languages[language] ? language : "Other";

    return (
        <a href={`https://github.com/Trixzyy/${name}`} rel="noreferrer" target="_blank">
            <div className="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
                <h1 className="font-semibold mb-1">{name}</h1>
                <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
                    {truncatedDescription}
                </p>
                <div className="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p className="flex flex-row items-center">
                        <motion.div
                            className="w-3 h-3 rounded-full mr-1"
                            style={{ background: Languages[displayLanguage], border: `solid 3px ${Languages[displayLanguage]}` }}
                        />
                        {displayLanguage}
                    </p>

                    <p className="flex flex-row items-center justify-center">
                        <AiOutlineStar className="mr-1 w-4 h-4" /> {stars}
                    </p>
                    <p className="flex flex-row items-center justify-center">
                        <BiGitRepoForked className="mr-1 w-4 h-4" /> {forks}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default RepoItem;
