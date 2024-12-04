import Image from "next/image";

export default function UserImg() {
    return (
        <div className="user-img--wrap">
            <Image
                className="rounded-[50%] object-cover"
                src={"/images/profile.jpeg"}
                width={40}
                height={40}
                alt="profile-img"
            />
        </div>
    );
}
