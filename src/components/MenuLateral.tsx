import { BsArrowLeft } from "react-icons/bs";

export default function MenuLateral() {
    return (
        <div className="flex">
            <div className="bg-dark-purple h-screen p-5 pt-8 w-72">
                <BsArrowLeft/>
            </div>
            <div className="p-7"><h1 className="text-2xl font-semibold">Página Inicial</h1></div>

        </div>
    )

}