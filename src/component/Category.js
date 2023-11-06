import {getCategory} from "./api.js"
import {NavLink, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Session from "./Session";

export default function Category() {


    const {idcat} = useParams()
    const getCat = useCallback(getCategory, [idcat])
    const [cat, setCat] = useState()
    useEffect(() => {
        setCat(getCat(idcat)[0])
    }, [idcat]);

    return (

        cat &&
        <>

            <div>
                <div className="my-5 text-4xl text-gray-600">
                    {cat.id}
                </div>

                <div  className="grid grid-cols-3 gap-4">
                    {cat.sessions.map((el)=>(
                        <NavLink  key={el.id} className="text-gray-800 font-bold border flex flex-col p-4" to={`${idcat}/${el.id}`}>{el.name}
                            <span className="font-light ">{el.speaker.name} | {el.speaker.org}</span>
                        </NavLink>
                        ))}
                </div>
<Session />
            </div>
        </>
    )
}
