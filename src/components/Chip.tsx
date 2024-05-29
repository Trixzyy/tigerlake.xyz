import React from 'react';
import { IconType } from "react-icons";
import { classNames } from '../util/classNames';

interface ChipProps {
    label: string;
    actionText: string;
    icon: IconType;
}

const Chip: React.FC<ChipProps> = ({ label, actionText, icon }) => {
    return (
        <div className="flex gap-4">
            <div
                draggable="true"
                role="button"
                title="Hover chip"
                className={classNames(
                    "mt-8 h-10 px-3 w-max flex gap-2 items-center rounded-lg",
                    "bg-black/10 text-black/80 hover:bg-gray-700/5 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400",
                    "dark:bg-[#c8c8dc]/10 dark:text-white/80 dark:hover:bg-[#c8c8dc]/5 dark:focus:bg-gray-300 dark:focus:text-blue-900 dark:active:text-primary"
                )}
            >
                <div
                    draggable="true"
                    role="button"
                    title="Hover chip"
                    className={classNames(
                        "h-6 px-3 w-max flex gap-2 items-center rounded-md",
                        "bg-red-200 text-gray-700 hover:bg-red-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400",
                        "dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary"
                    )}
                >
                    <span className="block text-sm font-medium">{label}</span>
                    
                </div>
                <span className="block text-sm font-medium text-black dark:text-white">{actionText}</span>
                <span>{icon({ className: "h-4 w-4" })}</span>

            </div>
        </div>
    );
};

export default Chip;
