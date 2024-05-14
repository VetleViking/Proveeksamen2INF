import Card from "@/components/Card"
import CheckList from "@/components/CheckListComponent";
import Image from "next/image";
import waves from "@/images/waves.png"
import cybersec from "@/images/cybersec.png"
import question from "@/images/question.png"

export default function Home() {
    return (
        <div>
            <div className="flex justify-center items-center flex-col my-56">
                <Image src={waves} alt="waves" layout="fill" objectFit="cover" className="mt-[-8rem] -z-10 opacity-50"/>
                <p className="text-6xl mb-8 text-center"><b>Cyber Security Services</b></p>
                <p className="text-center">Vi tilbyr sikkerhetstjenester for bedrifter og privatpersoner. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
                <button className="text-white px-4 py-1 rounded-lg mt-8 w-32 bg-gradient-to-t from-cyan-800 to-cyan-400">Start Nå</button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
            </div>
            <div className="flex justify-center items-center flex-col mt-52 mb-24">
                <p className="text-4xl mb-8 text-center"><b>Risiko og Samsvarstjenester</b></p>
                <p className="text-center">Vi tilbyr sikkerhetstjenester for bedrifter og privatpersoner. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={2}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={2}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={2}/>
            </div>
            <div className="flex justify-center items-center flex-col mt-52 mb-24">
                <p className="text-4xl mb-4 text-center"><b>Tjenester etter Bransje</b></p>
                <p className="text-center">Vi tilbyr sikkerhetstjenester for bedrifter og privatpersoner. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-16 mb-16 mt-40">
                <p className="text-3xl">Forbedre din sikkerhetsstilling.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quos temporibus. Dignissimos magnam accusamus quod optio, ullam expedita neque facilis dolore libero sed quisquam deleniti sint dolores eveniet totam fuga?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-36">
                <div className="flex flex-col justify-center gap-8">
                    <CheckList description="Lorem ipsum dolor sit amet."/>
                    <CheckList description="Lorem ipsum dolor sit amet."/>
                    <CheckList description="Lorem ipsum dolor sit amet."/>
                    <CheckList description="Lorem ipsum dolor sit amet."/>
                </div>
                <div>
                    <Image src={cybersec} alt="cybersec"/>
                </div>
            
                <div className="w-96 h-64">
                    <Image src={question} alt="question"/>
                </div>
                <div>
                    <p className="text-3xl">Hva er Cybersikkerhet?</p>
                    <p className="">cybersikkerhet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla voluptatibus recusandae in doloremque perspiciatis ratione accusantium nisi nobis vitae. Deserunt a sunt molestiae placeat saepe? Odit, fuga!</p>
                    <div className="flex flex-col justify-center gap-6">
                        <CheckList description="Lorem ipsum dolor sit amet." version={2}/>
                        <CheckList description="Lorem ipsum dolor sit amet."/>
                    </div>
                    <button className="bg-gray-950 border border-cyan-500 text-white px-4 py-1 rounded-lg mt-4 w-32">Les Mer</button>
                </div>
            </div>
            <div className="flex items-center flex-col bg-cyan-950 bg-opacity-40 mx-[-2rem] lg:mx-[-7rem] py-24">
                <p className="text-3xl text-center mb-8 opacity-100 mx-8 lg:mx-28">Klar til å se hvordan Cybersikkerhetstjenester kan hjelpe?</p>
                <p className="text-center mb-12 mx-8 lg:mx-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam fuga fugiat nihil sint nesciunt nulla eligendi ad!</p>
                <button className="bg-gradient-to-t from-cyan-800 to-cyan-400 text-white px-4 py-1 rounded-lg mt-4 w-32">Start Nå</button>
            </div>
        </div>
    );
}
