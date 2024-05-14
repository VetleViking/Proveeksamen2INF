import Employee from "@/components/Employee";
import Image from "next/image";
import waves from "@/images/waves.png";

export default function Ansatte() {
    return (
        <div>
            <Image src={waves} alt="waves" layout="fill" objectFit="cover" className="mt-[-12rem] -z-10 opacity-50"/>
            <div className="flex items-center flex-col my-40">
                <b className="text-3xl mb-8">Våre ansatte</b>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aspernatur commodi repudiandae.</p>
            </div>
            <div className="flex gap-8 flex-wrap justify-center">
                <Employee name="Ola Nordmann" position="CEO"/>
                <Employee name="Kari Nordmann" position="CTO"/>
                <Employee name="Geir Åge" position="CFO"/>
            </div>
        </div>
    );
}
