import Image from "next/image";
import logo from "../images/logo.png";
import twitter from '../images/twitter.svg';
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex items-center md:justify-between flex-col md:flex-row gap-4 p-4">
            <div>
                <Link href="/">
                    <Image src={logo} alt="logo" className="w-32"/>
                </Link>
            </div>
            <div className="flex gap-8 items-center">
                <a href="#">Produkter</a>
                <a href="#">Tjenester</a>       
                <a href="/ansatte">Ansatte</a>       
                <a href="/om">Om Oss</a>
                <a href="#">Kontakt</a>       
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