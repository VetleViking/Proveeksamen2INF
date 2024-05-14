import React from "react";
import Image from "next/image";
import checkbox from "../images/checkbox.svg";
import checkbox_blue from "../images/checkbox_blue.svg";

type CheckListProps = {
    description: string;
    version?: number;
};

const CheckList = ({ description, version }: CheckListProps) => {
    if (version === 2) {
        return (
            <div className="flex items-center gap-4">
                <Image src={checkbox_blue} alt="checkbox" className="w-6"/>
                <p>{description}</p>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <Image src={checkbox} alt="checkbox"  className="w-6"/>
            <p>{description}</p>
        </div>
    );
};

export default CheckList;