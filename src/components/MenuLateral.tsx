import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

export default function MenuLateral() {
    const [open, setOpen] = useState(true);


    return (
        <div className="flex">
            <div className= {`bg-dark-purple h-screen p-5 pt-8 transition-all duration-300 ${open ? "w-72" : "w-20" } relative`}>
                <BsArrowLeft className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
            </div>
            <div className="p-7"><h1 className="text-2xl font-semibold">Página Iniciali</h1></div>

        </div>
    )

}