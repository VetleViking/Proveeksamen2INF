import React from "react";
import Image from "next/image";
import bulb from "../images/bulb.svg";

type CardProps = {
    title: string;
    description: string;
    version?: number;
};

const Card = ({ title, description, version }: CardProps) => {
    if (version === 2) {
        return (
            <div className="flex justify-between gap-4 bg-gray-950 p-4 rounded-lg border border-gray-900">
                <Image src={bulb} alt="cap" className="w-12 h-12"/>
                <div>
                    <p className="text-2xl mb-2">{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    if (version === 3) {
        return (
            <div className="rounded-lg p-px bg-gradient-to-br from-cyan-500 via-transparent to-cyan-500 ">
                <div className="bg-gray-950 p-6 rounded-lg border border-gray-900 flex flex-col items-center">
                    <div className="rounded-full p-px bg-gradient-to-r from-cyan-500 via-transparent to-transparent mb-5">
                        <div className="bg-gray-900 text-cyan-500 p-2 rounded-full">
                            <Image src={bulb} alt="cap" className="w-12 h-12"/>
                        </div>
                    </div>
                    <p className="text-2xl mb-2">{title}</p>
                    <p className="text-center">{description}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-950 p-4 rounded-lg border border-gray-900">
            <div className="bg-gray-900 w-max text-cyan-500 p-2 rounded-full mb-5">
                <Image src={bulb} alt="cap" className="w-12 h-12"/>
            </div>
            <p className="text-2xl mb-2">{title}</p>
            <p>{description}</p>
            <div className="flex justify-between mt-6">
                <p className="text-cyan-500">Les Mer</p><b className="text-cyan-500">→</b>
            </div>
        </div>
    );
};

export default Card;