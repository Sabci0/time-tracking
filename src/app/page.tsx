"use client"
import Image from "next/image";
// @ts-ignore
import UserCard from "@/app/components/UserCard";
import TimeCard from "@/app/components/TimeCard";
import data from "@/app/assets/data.json";
import { useState } from "react";

import workImg from "@/img/icon-work.svg";
import playImage from "@/img/icon-play.svg";
import studyImage from "@/img/icon-study.svg";
import exerciseImage from "@/img/icon-exercise.svg";
import socialImage from "@/img/icon-social.svg";
import selfCareImage from "@/img/icon-self-care.svg";
const DashboardPage = () => {
    const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "monthly">("weekly");

    const styleList = [
        { color: "bg-Work", icon: workImg },
        { color: "bg-Play", icon: playImage },
        { color: "bg-Study", icon: studyImage },
        { color: "bg-Exercise", icon: exerciseImage },
        { color: "bg-Social", icon: socialImage },
        { color: "bg-SelfCare", icon: selfCareImage },
    ];

    return (
        <div className="min-h-screen w-full bg-VeryDarkBlue text-white flex flex-col items-center justify-center py-10 px-3">
            <main className="max-w-[850px] grid grid-cols-1 lg:grid-cols-4 gap-5 transition-all">
                <div className="bg-DarkBlue row-span-2 rounded-xl overflow-hidden flex items-start flex-col">
                    <UserCard/>
                    <div className="flex lg:flex-col gap-4 justify-between px-6 py-4 text-PaleBlue text-sm font-thin items-start flex-row w-full">
                        <button
                            className={timeFrame === "daily" ? "text-white" : ""}
                            onClick={() => setTimeFrame("daily")}
                        >
                            Daily
                        </button>
                        <button
                            className={timeFrame === "weekly" ? "text-white" : ""}
                            onClick={() => setTimeFrame("weekly")}
                        >
                            Weekly
                        </button>
                        <button
                            className={timeFrame === "monthly" ? "text-white" : ""}
                            onClick={() => setTimeFrame("monthly")}
                        >
                            Monthly
                        </button>
                    </div>
                </div>
                {data.map((d, i) => {
                    let current;
                    let previous;
                    if (timeFrame === "daily") {
                        current = d.timeframes.daily.current;
                        previous = d.timeframes.daily.previous;
                    }
                    if (timeFrame === "monthly") {
                        current = d.timeframes.monthly.current;
                        previous = d.timeframes.monthly.previous;
                    }
                    if (timeFrame === "weekly") {
                        current = d.timeframes.weekly.current;
                        previous = d.timeframes.weekly.previous;
                    }
                    return (
                        <TimeCard
                            color={styleList[i].color}
                            icon={styleList[i].icon}
                            key={i}
                            title={d.title}
                            current={current ?? 0}
                            previous={previous ?? 0}
                        />
                    );
                })}
            </main>
        </div>
    );
};

export default DashboardPage;
