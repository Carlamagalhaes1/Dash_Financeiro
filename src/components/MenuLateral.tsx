import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";


export default function MenuLateral() {
    const [open, setOpen] = useState(true);


    return (
        <div className="flex">
            <div className={`bg-dark-purple h-screen p-5 pt-8 transition-all duration-300 ${open ? "w-72" : "w-20"} relative`}>
                <BsArrowLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className="inline-flex">
                    <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2  duration-300 ${open && 'rotate-[360deg]'}`} />
                    <h1 className={`text-white origin-left font-medium text-2xl  duration-200 ${!open && "scale-0"}    `}>Tailwind</h1></div>
                <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                    <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"} `} />
                    <input type={"search"} placeholder="pesquisar" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>

                </div>
                <ul className="pt-2">
                    teste

                </ul>

            </div>

            <div className="p-7"><h1 className="text-2xl font-semibold">Página Iniciali</h1></div>

        </div>
    )

}