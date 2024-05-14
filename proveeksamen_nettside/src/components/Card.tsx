import React from "react";

type CardProps = {
    title: string;
    description: string;
    version?: number;
};

const Card = ({ title, description, version }: CardProps) => {
    if (version === 2) {
        return (
            <div className="flex justify-between bg-gray-950 p-4 rounded-lg border border-gray-900">
                <div className="bg-gray-900 text-cyan-500 w-min p-2 mb-2 rounded-full">
                    placeholder
                </div>
                <div>
                    <p className="text-2xl mb-2">{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    if (version === 3) {
        return (
            <div className="bg-gray-950 p-6 rounded-lg border border-gray-900 flex flex-col items-center">
                <div className="bg-gray-900 text-cyan-500 w-min p-2 mb-5 rounded-full">
                    placeholder
                </div>
                <p className="text-2xl mb-2">{title}</p>
                <p className="text-center">{description}</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-950 p-4 rounded-lg border border-gray-900">
            <div className="bg-gray-900 text-cyan-500 w-min p-2 mb-2 rounded-full">
                placeholder
            </div>
            <p className="text-2xl mb-2">{title}</p>
            <p>{description}</p>
            <div className="flex justify-between mt-4">
                <p className="text-cyan-500">Les Mer</p><b className="text-cyan-500">→</b>
            </div>
        </div>
    );
};

export default Card;