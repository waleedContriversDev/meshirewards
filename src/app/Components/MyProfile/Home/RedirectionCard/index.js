import Image from "next/image";
import Link from "next/link";

export default function RedirectionCard ({ image, text, href }) {
    return (
        <div className="flex flex-col border rounded-lg border-slate-300 pt-4 pb-2 px-6 mt-3">
            <Link href={href}>
                <div className="flex flex-col items-center justify-center">
                    <Image src={image} alt={text} className="w-full h-auto mb-2"/>
                    <span className="text-lg font-bold">{text}</span>
                </div>
            </Link>
        </div>
    );
}