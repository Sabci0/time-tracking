import Image from "next/image";
import userImage from "@/img/image-jeremy.png";

const UserCard = () => {
    return (
        <div className="bg-Blue rounded-xl px-6 pt-10 pb-16 flex-row lg:flex-col flex gap-8 w-full">
            <Image
                src={userImage}
                alt="user-image"
                className="ring-2 h-12 w-12 rounded-full ring-white border-white"
            />
            <section className="flex-col flex gap-1">
                <p className="text-PaleBlue text-xs">Report for</p>
                <h2 className="text-2xl lg:text-3xl font-thin">Jeremy Robson</h2>
            </section>
        </div>
    );
};

export default UserCard;
