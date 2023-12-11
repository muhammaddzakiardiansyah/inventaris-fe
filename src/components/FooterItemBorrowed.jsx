import { Link } from "react-router-dom";

const FooterItemBorrowed = () => {
    return (
        <>
        <div className="h-[53vh] bg-[#03C988]">
            <div className="md:flex md:w-[70vw] mx-auto justify-between">
                <ul className="p-5 font-semibold text-black">
                    <h2 className="text-xl font-bold mb-3">Tentang Sekolah 🏤</h2>
                    <li className="py-1 px-3 md:hover:underline"><Link to='https://ponpes-smksa.sch.id/'>Smk Syafi'i Akrom</Link></li>
                    <li className="py-1 px-3 md:hover:underline"><Link to='https://ppdb.ponpes-smksa.sch.id/'>PPDB Smk Syafi'i Akrom</Link></li>
                    <li className="py-1 px-3 md:hover:underline"><Link to='https://bkk.ponpes-smksa.sch.id/'>BKK Smk Syafi'i Akrom</Link></li>
                </ul>
                <ul className="p-5 font-semibold text-black">
                    <h2 className="text-xl font-bold mb-3">Blog Info 🎉</h2>
                    <li className="py-1 px-3 md:hover:underline"><Link to='https://github.com/fairy-camp'>Developer Team</Link></li>
                    <li className="py-1 px-3 md:hover:underline">Codepelita</li>
                    <li className="py-1 px-3 md:hover:underline">CodeAuthentic</li>
                </ul>
            </div>
            <hr className="w-[90%] mx-auto text-center md:mt-32" />
            <p className="text-center py-2 text-slate-800">Copyright by Codeauthentic x Codepelita</p>
        </div>
        </>
    )
}

export default FooterItemBorrowed;