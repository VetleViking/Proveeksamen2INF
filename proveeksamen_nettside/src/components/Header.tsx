import Image from "next/image";
import logo from "../images/logo.png";
import twitter from '../images/twitter.svg';
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import React from "react";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div>
                <Image src={logo} alt="logo" className="w-32 py-8"/>
            </div>
            <div className="flex gap-8 items-center">
                <p className="">Produkter</p>
                <p className="">Tjenester</p>       
                <p className="">Industrier</p>       
                <p className="">Om Oss</p>
                <p className="">Kontakt</p>       
            </div>
            <div className="flex gap-2 items-center">
                <div className="rounded-full border border-cyan-500 p-1">
                    <Image src={twitter} alt="twitter"/>
                </div>
                <div className="rounded-full border border-cyan-500 p-1">
                    <Image src={linkedin} alt="linkedin"/>
                </div>
                <div className="rounded-full border border-cyan-500 p-1">
                    <Image src={instagram} alt="instagram"/>
                </div>
                <div className="rounded-full border border-cyan-500 p-1">
                    <Image src={facebook} alt="facebook"/>
                </div>
            </div>
        </div>
    );
};

export default Header;