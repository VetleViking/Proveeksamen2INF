import Card from "@/components/Card"
import CheckList from "@/components/CheckListComponent";
import checkbox from "@/images/checkbox.svg"
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-6xl mb-4 text-center"><b>Cyber Security Services</b></p>
                <p className="text-center">Vi tilbyr sikkerhetstjenester for bedrifter og privatpersoner. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
                <button className="bg-cyan-500 text-white px-4 py-1 rounded-lg mt-4 w-32">Start Nå</button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."/>
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-4xl mb-4 text-center"><b>Risiko og Samsvarstjenester</b></p>
                <p className="text-center">Vi tilbyr sikkerhetstjenester for bedrifter og privatpersoner. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={2}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={2}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={2}/>
            </div>
            <div className="flex justify-center items-center flex-col">
                <p className="text-4xl mb-4 text-center"><b>Tjenester etter Bransje</b></p>
                <p className="text-center">Vi tilbyr sikkerhetstjenester for bedrifter og privatpersoner. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
                <Card title="Tittel" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." version={3}/>
            </div>
            <div>
                <div className="flex justify-between gap-16">
                    <p className="text-3xl">Forbedre din sikkerhetsstilling.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quos temporibus. Dignissimos magnam accusamus quod optio, ullam expedita neque facilis dolore libero sed quisquam deleniti sint dolores eveniet totam fuga?</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center gap-8">
                        <CheckList description="Lorem ipsum dolor sit amet."/>
                        <CheckList description="Lorem ipsum dolor sit amet."/>
                        <CheckList description="Lorem ipsum dolor sit amet."/>
                        <CheckList description="Lorem ipsum dolor sit amet."/>
                    </div>
                    <div>
                        <img src="https://cataas.com/cat" alt="cat" className="w-96 h-64"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-8">
                <div className="w-96 h-64">
                    <img src="https://cataas.com/cat" alt="cat" className="w-96 h-64 min-w-80"/>
                </div>
                <div>
                    <p className="text-3xl">Hva er Cybersikkerhet?</p>
                    <p className="max-w-lg">cybersikkerhet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla voluptatibus recusandae in doloremque perspiciatis ratione accusantium nisi nobis vitae. Deserunt a sunt molestiae placeat saepe? Odit, fuga!</p>
                    <div className="flex flex-col justify-center gap-6">
                        <CheckList description="Lorem ipsum dolor sit amet." version={2}/>
                        <CheckList description="Lorem ipsum dolor sit amet."/>
                    </div>
                    <button className="bg-gray-950 border border-cyan-500 text-white px-4 py-1 rounded-lg mt-4 w-32">Les Mer</button>
                </div>
            </div>
            <div className="flex items-center flex-col">
                <p className="text-3xl text-center mb-8">Klar til å se hvordan Cybersikkerhetstjenester kan hjelpe?</p>
                <p className="text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam fuga fugiat nihil sint nesciunt nulla eligendi ad!</p>
                <button className="bg-cyan-500 text-white px-4 py-1 rounded-lg mt-4 w-32">Start Nå</button>
            </div>
        </div>
    );
}
