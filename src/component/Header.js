import {Link} from "react-router-dom";

export default function Header() {


    return (
        <>
            <div className=" h-14 rounded-b-lg shadow-lg flex items-center justify-center ">

                <ul className="flex flex-row gap-10 text-red-500   ">
                    <li className="hover:text-blue-500 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="hover:text-blue-500 cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="hover:text-blue-500 cursor-pointer">Categories</li>
                    <li className="hover:text-blue-500 cursor-pointer">Register</li>
                </ul>

            </div>

        </>

    )
}