import Image from "next/image";
import waves from "../../images/waves.png";

export default function Om() {
    return (
        <div>
            <Image src={waves} alt="waves" layout="fill" objectFit="cover" className="mt-[25rem] -z-10 opacity-30"/>
            <div className="flex items-center flex-col mb-32 mt-40">
                <b className="text-3xl mb-6">Om oss</b>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam aspernatur commodi repudiandae.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24 mb-12">
                <div>
                    <p className="text-2xl mb-8">Vår historie</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src="https://cataas.com/cat" alt="cat" className="w-96 h-96 rounded-lg"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-24">
                <div className="order-2 md:order-1">
                    <img src="https://cataas.com/cat" alt="cat" className="w-96 h-96 rounded-lg"/>
                </div>
                <div className="order-1 md:order-2">
                    <p className="text-2xl mb-8">Vår visjon</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-3xl mt-12 text-center mb-4">Besøk oss</p>
                <iframe className="rounded-lg border border-gray-950 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1029163.872863429!2d10.885700879135426!3d59.74802094171434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416ff18bc37e67%3A0x6b862b110aeac8e7!2sSigma%20Technology%20Norway!5e0!3m2!1sen!2sno!4v1715687104940!5m2!1sen!2sno" width="600" height="450" loading="lazy"></iframe>
            </div>
        </div>
    );
}
