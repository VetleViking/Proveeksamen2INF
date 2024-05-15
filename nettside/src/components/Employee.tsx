import React from "react";
import Image from "next/image";

type EmployeeProps = {
    name: string;
    position: string;
};

const Employee = ({ name, position }: EmployeeProps) => {
    return (
        <div className="p-px bg-gradient-to-br from-cyan-950 to-transparent w-min rounded-lg">
            <div className="flex items-center gap-2 flex-col p-2 bg-gray-950 w-max rounded-lg">
                <img src="https://cataas.com/cat" alt="cat" className="w-32 h-32 rounded-full"/>
                <p>{name}</p>
                <p>{position}</p>
            </div>
        </div>
    );
};

export default Employee;