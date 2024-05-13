import Image from "next/image";
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <div>
            <div className="flex justify-between border-b border-gray-500 px-28 gap-4 pb-14 pt-20">
                <div>
                    <Image src={logo} alt="logo" className="w-32 py-8"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <p className="text-xl pb-4">Om Oss</p>
                    <p>Om Oss</p>
                    <p>Kontakt</p>
                    <p>Anmeld Oss</p>
                </div>
                <div>
                    <p className="text-xl pb-4">Kontakt Oss</p>
                    <p><b>Adresse:</b> Satkhira, Kaliganj, BD</p>
                    <p><b>Email:</b> aburaihan.it009@gmail.com</p>
                    <p><b>Telefon:</b> +88 01700000000</p>
                </div>
                <div>
                    <p className="text-xl pb-4">Følg Oss:</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
                <div>
                    {/* google play og app store */}
                </div>
            </div>
            <div className="flex justify-center py-8">
                <p>© 2024 Cyber Security Services. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;