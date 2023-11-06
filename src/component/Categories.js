import {NavLink} from "react-router-dom";
import {getCategories} from "./api.js"
import Category from "./Category";
export default function Categories(){
    return (
        <>
            <div className="mx-64 h-[950px]">
                <div className="my-5 text-4xl">
                    Session Categories
                </div>
                <div className="grid grid-cols-3 text-gray-400 font-light ">
                    {getCategories().map((category) => (
                        <div className="my-5 hover:text-black cursor-pointer " key={category.id} >
                            <NavLink to={`${category.id}`}>{category.name}</NavLink>
                        </div>
                    ))}
                </div>
            <Category />
            </div>
        </>


    )
}
