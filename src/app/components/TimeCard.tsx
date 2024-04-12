import Image from "next/image";
import clsx from "clsx";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

type TimeCardType = {
    title: string;
    current: number;
    previous: number;
    color: string;
    icon: string | StaticImport;
};

const TimeCard = ({ current = 32, previous = 36, title, color, icon }: TimeCardType) => {
    return (
        <div className={clsx("pt-10 rounded-xl overflow-hidden relative", color)}>
            <Image
                className="absolute top-[-10px] right-3 z-10 h-[70px] w-auto"
                src={icon}
                alt="time-card-img"
            />
            <div className="bg-DarkBlue relative z-20 rounded-t-lg p-6 flex-col flex gap-6">
                <div className="flex justify-between w-full">
                    <p>{title}</p>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                            fill="#BBC0FF"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <section className="lg:flex-col items-start justify-between flex gap-1 flex-row">
                    <h2 className="text-3xl lg:text-4xl font-thin">{current}hrs</h2>
                    <p className="text-PaleBlue text-xs">Last Week - {previous}hrs</p>
                </section>
            </div>
        </div>
    );
};

export default TimeCard;
