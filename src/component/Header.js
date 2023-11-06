import {NavLink} from "react-router-dom";


export default function Header() {
    return (
        <>
            <div className=" h-14 rounded-b-lg shadow-lg flex items-center justify-center ">

                <ul className="flex flex-row gap-10 text-red-500   ">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li ><NavLink to="/about">About</NavLink></li>
                    <li ><NavLink to="/categories">Categories</NavLink></li>
                    <li ><NavLink to="/register">Register</NavLink></li>

                </ul>

            </div>

        </>

    )
}