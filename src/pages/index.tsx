import { motion } from "framer-motion";
import {
    SiCloudflare,
    SiVisualstudiocode,
    SiGit,
    SiGnubash,
    SiDocker,
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiReact,
    SiMongodb,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiFigma,
    SiNginx,
    SiRaspberrypi,
    SiDiscord,
} from "react-icons/si";

import { TechItem } from "../components/TechItem";
import RepoItem from "../components/RepoItem";
import Bio from "../components/Bio"

interface AppProps {
    stats: Record<string, number>;
    topRepos: Record<any, any>;
}

const Index = ({ stats, topRepos }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >

           
           <Bio></Bio>
      
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mt-14 mb-12">
            Hello, I'm Trixzy, a dedicated full-stack web developer based in the UK. I'm passionate about software engineering and thrive on solving complex problems. Welcome to my corner of the web!
            </p>

            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                My specialty is JavaScript, I started with discord bots and moved on to even more. 
                I want to know how it all works; from designing and developing software, to understanding
                how the many moving parts of the internet work together, to cybersecurity, programming, and so much
                more. The tech space is an ever evolving playing field, you learn something new everyday, 
                which means its my job to understand <i>how</i> or <i>why</i> the technology around us works.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I have experience with. 
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-red-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiVisualstudiocode} name="VSCode - My IDE of choice" />
                <TechItem icon={SiNodeJs} name="Node.js" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiPython} name="Python" />
                <TechItem icon={SiNextJs} name="Next.js" />
                <TechItem icon={SiReact} name="React.js" />
                <TechItem icon={SiTailwindCSS} name="TailwindCSS" />
                <TechItem icon={SiMongodb} name="MongoDB" />
                <TechItem icon={SiDiscord} name="Discord.js" />
                <TechItem icon={SiDocker} name="Docker" />
                <TechItem icon={SiNginx} name="Nginx" />
                <TechItem icon={SiCloudflare} name="Cloudflare" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiGnubash} name="Bash" />
                <TechItem icon={SiRaspberrypi} name="RaspberryPi" />
                <TechItem icon={SiFigma} name="Figma" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    data-umami-event="githubClicked"
                    href="https://github.com/Trixzyy"
                    rel="noreferrer"
                    className="font-semibold text-violet-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and share what I know. In total, all of my open sourced projects have earnt
                me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on GitHub, and{" "}
                <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below are some of
                my most popular repositories.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/Trixzyy`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/Trixzyy/repos?type=owner&per_page=100`).then(res =>
        res.json()
    );

    const topRepos = repos
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
